const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { getStore } = require('@netlify/blobs');

function loadAvailability() {
  try {
    const file = path.join(process.cwd(), '_data', 'availability.yml');
    return yaml.load(fs.readFileSync(file, 'utf8'));
  } catch {
    return {
      timezone: 'America/New_York',
      slot_duration_minutes: 20,
      buffer_minutes: 10,
      available_days: [1, 2, 3, 4, 5],
      available_start: '09:00',
      available_end: '17:00',
      booking_window_days: 28,
    };
  }
}

// Returns "YYYY-MM-DD" for a Date in the given timezone
function toDateString(date, tz) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(date);
}

// Returns 0=Sun … 6=Sat for a Date in the given timezone
function getDayOfWeek(date, tz) {
  const name = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short' }).format(date);
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(name);
}

// Generates all slot keys ("YYYY-MM-DDTHH:MM") for a single date string
function generateDaySlots(dateStr, av) {
  const [sh, sm] = av.available_start.split(':').map(Number);
  const [eh, em] = av.available_end.split(':').map(Number);
  let cur = sh * 60 + sm;
  const end = eh * 60 + em;
  const slots = [];
  while (cur + av.slot_duration_minutes <= end) {
    const h = String(Math.floor(cur / 60)).padStart(2, '0');
    const m = String(cur % 60).padStart(2, '0');
    slots.push(`${dateStr}T${h}:${m}`);
    cur += av.slot_duration_minutes + av.buffer_minutes;
  }
  return slots;
}

exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  try {
    const av = loadAvailability();
    let booked = new Set();
    try {
      const store = getStore({ name: 'bookings', consistency: 'strong' });
      const listed = await store.list();
      booked = new Set(listed.blobs.map((b) => b.key));
    } catch {
      // Blobs unavailable (empty store or missing context) — all slots are open
    }

    const now = new Date();
    const result = {};

    for (let i = 1; i <= av.booking_window_days; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() + i);

      if (!av.available_days.includes(getDayOfWeek(d, av.timezone))) continue;

      const dateStr = toDateString(d, av.timezone);
      const available = generateDaySlots(dateStr, av).filter((s) => !booked.has(s));
      if (available.length) result[dateStr] = available;
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ slots: result, timezone: av.timezone }),
    };
  } catch (err) {
    console.error('get-slots error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch available slots.' }),
    };
  }
};

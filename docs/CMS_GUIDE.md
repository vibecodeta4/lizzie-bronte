# CMS Guide — Bronte Advisory Website

This guide is for Dr. Lizzie Bronte and anyone managing content on the website. No technical knowledge is required.

**CMS login page:** https://drlizziebronte.netlify.app/admin

---

## Logging In

1. Go to https://drlizziebronte.netlify.app/admin
2. Click **Login with Netlify Identity**
3. Enter your email and password
4. You are now in the CMS dashboard

If you have forgotten your password, click **Forgot password?** on the login screen and follow the email instructions.

---

## Dashboard Overview

After logging in you will see a left-hand sidebar with the following sections:

| Section | What it controls |
|---------|-----------------|
| **Testimonials** | Client quotes shown on the home page |
| **Pricing** | Program investment amounts |
| **Settings** | Social media links, contact email, spaces note |
| **Booking Availability** | Days and hours clients can book Clarity Calls |
| **Articles** | Blog posts / articles |

Click any section to open it.

---

## Editing Testimonials

### To edit the Featured Testimonial (large quote on home page)
1. Click **Testimonials** in the sidebar
2. Click **All Testimonials**
3. Scroll to **Featured Testimonial**
4. Edit the **Quote**, **Name**, and **Role** fields
5. Click **Save** (top right)

### To add a new Testimonial Card
1. Open **Testimonials → All Testimonials**
2. Scroll to **Testimonial Cards**
3. Click **Add Testimonial Cards**
4. Fill in **Quote**, **Name**, **Role**
5. Click **Save**

### To remove a Testimonial Card
1. Open **Testimonials → All Testimonials**
2. Find the card you want to remove under **Testimonial Cards**
3. Click the **delete icon** (trash can) next to it
4. Click **Save**

---

## Updating Pricing

1. Click **Pricing** in the sidebar
2. Click **Program Pricing**
3. Update any of the following fields:
   - **Monthly Amount** — e.g. `$1,250`
   - **Monthly Period Label** — e.g. `per month × 3`
   - **Full Payment Amount** — e.g. `$2,999`
   - **Full Payment Label** — e.g. `paid in full`
   - **Program Duration** — e.g. `12-Week Private 1:1 Program`
4. Click **Save**

Changes appear on the Work With Me page and the home page offer card.

---

## Updating Site Settings

1. Click **Settings** in the sidebar
2. Click **Site Settings**
3. Update any of the following:
   - **LinkedIn URL** — paste the full URL to your LinkedIn profile
   - **Instagram URL** — paste the full URL to your Instagram
   - **Contact Email** — the email shown in the footer
   - **Clarity Call Spaces Note** — short note on the contact page, e.g. `Limited spaces — 2 remaining for April`
4. Click **Save**

---

## Managing Booking Availability

This controls when the self-serve booking calendar is open for Clarity Calls.

1. Click **Booking Availability** in the sidebar
2. Click **Clarity Call Schedule**
3. Update the relevant fields:

| Field | Description | Example |
|-------|-------------|---------|
| **Timezone** | Your local timezone | `America/New_York` |
| **Call Duration (minutes)** | Length of each Clarity Call | `20` |
| **Buffer Between Calls (minutes)** | Gap left after each call | `10` |
| **Available Days** | Days of the week you take calls | Monday, Tuesday, Wednesday, Thursday, Friday |
| **Available From** | Start of your available window | `09:00` |
| **Available Until** | End of your available window | `17:00` |
| **Booking Window (days ahead)** | How far in advance clients can book | `28` |
| **Notification Email** | Email that receives new booking alerts | `lizzie@bronteadvisory.com` |

4. Click **Save**

> **Note:** Changes to availability take effect on the next page load. Slots already booked are not affected.

---

## Writing and Publishing Articles

### To create a new article
1. Click **Articles** in the sidebar
2. Click **New Articles** (top right)
3. Fill in the fields:
   - **Title** — the article headline
   - **Publish Date** — when it should appear (can be a future date)
   - **Tag / Category** — e.g. `Leadership`, `Self-Trust`, `Identity`
   - **Excerpt** — a short 1–2 sentence summary shown in the article card
   - **Featured Image** — optional photo (click to upload)
   - **Body** — the full article text (rich text editor)
4. Click **Save** — the article is published immediately

### To edit an existing article
1. Click **Articles** in the sidebar
2. Click the article title you want to edit
3. Make your changes
4. Click **Save**

### To unpublish / delete an article
1. Open the article
2. Click the **three-dot menu** (⋯) at the top right
3. Select **Delete**

---

## How Changes Get Published

When you click **Save** in the CMS, it commits your change directly to GitHub. Netlify detects this and automatically rebuilds and republishes the website.

**Changes are typically live within 60 seconds of saving.**

You do not need to do anything else — there is no separate "publish" or "deploy" step.

---

## Getting Help

If something is not working as expected on the website, contact your developer with:
- A description of what you changed
- A screenshot of the issue
- The URL of the page affected

Developer reference documentation is in the `README.md` file at the root of the GitHub repository.

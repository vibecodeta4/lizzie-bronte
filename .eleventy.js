const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  // Support YAML data files (keeps existing _data/*.yml files unchanged)
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

  // LiquidJS doesn't have a built-in limit filter
  eleventyConfig.addFilter("limit", (array, count) => {
    if (!Array.isArray(array)) return array;
    return array.slice(0, Number(count));
  });

  // Pass through static assets untouched
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Blog posts collection (reverse chronological)
  eleventyConfig.addCollection("posts", function(col) {
    return col.getFilteredByGlob("_posts/*.md").reverse();
  });

  return {
    dir: {
      layouts:  "_layouts",
      includes: "_includes",
      data:     "_data",
      output:   "_site"
    },
    templateFormats:      ["html", "md"],
    htmlTemplateEngine:   "liquid",
    markdownTemplateEngine: "liquid"
  };
};

const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  // Support YAML data files (keeps existing _data/*.yml files unchanged)
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

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

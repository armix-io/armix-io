module.exports = {
  content: ["./src/**.html"],
  css: ["./src/***.css"],
  output: "./dist",
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

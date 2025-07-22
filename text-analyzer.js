function wordCount(text) {
  return text.split(" ").length;
}

wordCount("Hello world");

module.exports = {
  wordCount,
};

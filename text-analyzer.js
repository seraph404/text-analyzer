function wordCount(text) {
  return text.trim().split(" ").length;
}

wordCount("Hello world");

module.exports = {
  wordCount,
};

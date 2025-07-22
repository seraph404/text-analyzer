function wordCount(text) {
  return text.trim().split(/\s+/).length;
}

wordCount("Hello world");

module.exports = {
  wordCount,
};

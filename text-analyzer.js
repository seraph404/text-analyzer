function wordCount(text) {
  return text.trim().split(/\s+/).length;
}

function mostCommonWord(text) {
  const wordArr = text.trim().split(/\s+/);
  const wordCounts = wordArr.reduce((acc, word) => {
    // if acc[word] doesn't exist, give it a beginning count of zero
    // then, add one
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  let mostCommon = null;
  let highestCount = 0;

  for (const word in wordCounts) {
    if (wordCounts[word] > highestCount) {
      highestCount = wordCounts[word];
      mostCommon = word;
    }
  }

  return mostCommon;
}

console.log(mostCommonWord("Hello world world"));

module.exports = {
  wordCount,
  mostCommonWord,
};

const { wordCount } = require("./text-analyzer.js");
describe("textAnalyzer - wordCount", () => {
  test("returns 2 for 'Hello world'", () => {
    expect(wordCount("Hello world")).toBe(2);
  });
});

const { wordCount } = require("./text-analyzer.js");
describe("textAnalyzer - wordCount", () => {
  test("returns 2 for 'Hello world'", () => {
    expect(wordCount("Hello world")).toBe(2);
  });
  test("returns 2 for 'Hello, world!", () => {
    expect(wordCount("Hello, world!")).toBe(2);
  });
  test("accounts for leading whitespace in ' Hello, world!", () => {
    expect(wordCount(" Hello, world!")).toBe(2);
  });
  test("accounts for trailing whitespace in 'Hello, world! ", () => {
    expect(wordCount("Hello, world! ")).toBe(2);
  });
  test("accounts for tabs", () => {
    expect(wordCount("Hello\tworld")).toBe(2);
  });
  test("accounts for new lines", () => {
    expect(wordCount("Hello\nworld")).toBe(2);
  });
  test("accounts for new lines and tabs", () => {
    expect(wordCount("Hello \n \t world")).toBe(2);
  });
});

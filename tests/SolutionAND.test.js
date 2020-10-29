const solution = require("../SolutionAND");

test("input is 3 and is a single digit", () => {
  expect(solution("3")).toEqual("3");
});

test("input is 32 and is greater than 1 digit", () => {
  expect(solution("32")).not.toBe("3");
});

test("input takes in letters and numbers 'A 3B2 C6D' and removes non integers", () => {
  expect(solution("A 3B2 C6D")).toEqual("632, 623, 362, 326, 263, 236");
});

test("input throws an error stating 'string had no number' when no input is entered", () => {
  expect(() => solution("")).toThrowError();
});

test("input throws an error stating 'string had no number' when input is entered with 'ABC' as letters only", () => {
  expect(() => solution("ABC")).toThrowError();
});

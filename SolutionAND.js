function solution(input) {
  const pairs = getPairsRecursively(input);
  const sortedPairs = pairs.sort((a, b) => b - a);
  const pairsAsString = sortedPairs.join(", ");
  return pairsAsString;
}

const getPairsRecursively = (input) => {
  const integersOnly = input.replace(/\D/g, "");

  if (integersOnly.length === 1) return [integersOnly];
  if (integersOnly.length === 0) throw new Error("String had no numbers");

  let results = [];

  for (let i = 0; i < integersOnly.length; i++) {
    let currentNum = integersOnly[i];

    if (integersOnly.indexOf(currentNum) != i) continue;

    let remainingNums =
      integersOnly.slice(0, i) + integersOnly.slice(i + 1, integersOnly.length);

    for (let groupedNumbers of getPairsRecursively(remainingNums)) {
      results.push(currentNum + groupedNumbers);
    }
  }

  return results;
};

// some example inputs
// console.log(solution("")); // expected output "String had no numbers" error
// console.log(solution("1")); // expected output "1"
// console.log(solution("326")); // expected output "632,623,362,326,263,236"
// console.log(solution("A 3B2 C6D")); // expected output "632,623,362,326,263,236"
// console.log(solution("ABC")); // expected output "String had no numbers" error

module.exports = solution;

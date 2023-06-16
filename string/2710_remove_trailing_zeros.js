// Given a positive integer num represented as a string,
// return the integer num without trailing zeros as a string.

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros,
// we remove them and return integer "512301".

// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".

const removeTrailingZeros = (num) => {
  if (num[num.length - 1] !== "0") return num;

  let noTrailingZeroes = "";

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "0" || (num[i] === "0" && num[i + 1] !== "0" && num[i + 1])) {
      noTrailingZeroes += num[i];
    }
  }

  return noTrailingZeroes;
};

console.log(removeTrailingZeros("51230100"));

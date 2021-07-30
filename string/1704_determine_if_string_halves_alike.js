// https://leetcode.com/problems/determine-if-string-halves-are-alike/

// You are given a string s of even length. Split this string into two halves of equal lengths,
// and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

const halvesAreAlike = (string) => {
  const midIdx = string.length / 2;
  const firstHalf = string.slice(0, midIdx);
  const secondHalf = string.slice(midIdx, string.length);
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let firstHalfVowelCount = 0;
  let secondHalfVowelCount = 0;

  for (let i = 0; i < firstHalf.length; i++) {
    if (vowels[firstHalf[i].toLowerCase()]) {
      firstHalfVowelCount++;
    }
  }

  for (let i = 0; i < secondHalf.length; i++) {
    if (vowels[secondHalf[i].toLowerCase()]) {
      secondHalfVowelCount++;
    }
  }

  return firstHalfVowelCount === secondHalfVowelCount;
};

console.log(halvesAreAlike("AbCdEfGh"));

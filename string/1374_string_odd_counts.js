// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

const generateTheString = (n) => {
  let str = "";
  if (n % 2 != 0) {
    for (let i = 0; i < n; i++) {
      str = str.concat("a");
    }
  } else {
    for (let i = 0; i < n - 1; i++) {
      str = str.concat("a");
    }
    str = str.concat("b");
  }

  return str;
};

console.log(generateTheString(5));

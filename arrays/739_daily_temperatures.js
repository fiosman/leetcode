// https://leetcode.com/problems/daily-temperatures/

const dailyTemperatures = (temperatures) => {
  // O(n^2) time and O(n) space
  let outputArr = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (i === temperatures.length - 1) {
      outputArr.push(0);
    }
    for (let j = i + 1; j < temperatures.length; j++) {
      console.log(i, j);
      if (temperatures[j] > temperatures[i]) {
        outputArr.push(j - i);
        break;
      }
    }
  }
  return outputArr;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

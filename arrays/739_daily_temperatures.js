// https://leetcode.com/problems/daily-temperatures/

const dailyTemperatures = (temperatures) => {
  // O(n^2) time and O(n) space
  let outputArr = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (i === temperatures.length - 1) {
      outputArr.push(0);
    }
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        outputArr.push(j - i);
        break;
      }
      if (j === temperatures.length - 1) {
        outputArr.push(0);
      }
    }
  }
  return outputArr;
};

console.log(dailyTemperatures([30, 60, 90]));

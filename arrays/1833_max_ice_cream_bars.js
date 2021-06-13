// https://leetcode.com/problems/maximum-ice-cream-bars/

const maxIceCream = (costs, coins) => {
  let remainingCoins = coins;
  let maxBars = 0;

  const sorted = costs.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > remainingCoins) break;

    remainingCoins -= sorted[i];
    maxBars += 1;
  }

  return maxBars;
};

console.log(
  maxIceCream(
    [
      27, 23, 33, 26, 46, 86, 70, 85, 89, 82, 57, 66, 42, 18, 18, 5, 46, 56, 42,
      82, 52, 78, 4, 27, 96, 74, 74, 52, 2, 24, 78, 18, 42, 10, 12, 10, 80, 30,
      60, 38, 32, 7, 98, 26, 18, 62, 50, 42, 15, 14, 32, 86, 93, 98, 47, 46, 58,
      42, 74, 69, 51, 53, 58, 40, 66, 46, 65, 2, 10, 82, 94, 26, 6, 78, 2, 101,
      97, 16, 12, 18, 71, 5, 46, 22, 58, 12, 18, 62, 61, 51, 2, 18, 34, 12, 36,
      58, 20, 12, 17, 70,
    ],
    241
  )
);

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function (g, s) {
  let numOfHappyChildren = 0;
  const children = g.sort((a, b) => b - a);
  const size = s.sort((a, b) => a - b);

  for (let i = 0; i < children.length; i++) {
    for (let j = 0; j < size.length; j++) {
      if (size[j] >= children[i]) {
        numOfHappyChildren++;
        size.splice(j, 1);
        break;
      }
    }
  }

  return numOfHappyChildren;
};

console.log(findContentChildren([1, 2, 3], [3]));

// https://leetcode.com/problems/goal-parser-interpretation/

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

const interpret = (command) => {
  const mapObj = {
    "()": "o",
    "(al)": "al",
  };
  return command.replace(/\(al\)|\(\)/g, (matched) => mapObj[matched]);
};

console.log(interpret("G()(al)"));

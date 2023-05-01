// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
// Return the average salary of employees excluding the minimum and maximum salary.
// Answers within 10-5 of the actual answer will be accepted.

const average = (salary) => {
  let maxSalary = salary[0];
  let minSalary = salary[0];

  for (let i = 1; i < salary.length; i++) {
    if (salary[i] > maxSalary) {
      maxSalary = salary[i];
    }

    if (salary[i] < minSalary) {
      minSalary = salary[i];
    }
  }

  const averageSal = salary.filter((s) => s !== minSalary && s !== maxSalary);
  let sum = averageSal[0];
  for (let i = 1; i < averageSal.length; i++) {
    sum += averageSal[i];
  }

  return sum / averageSal.length;
};

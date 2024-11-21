--https://leetcode.com/problems/duplicate-emails/description/
SELECT email, COUNT(email) from person GROUP BY email HAVING COUNT(email) >= 1;
SELECT b.name as Employee from employee a LEFT JOIN employee b on a.id = b.managerId where b.salary > a.salary
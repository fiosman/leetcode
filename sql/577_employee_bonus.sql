SELECT name, bonus from employee e left join bonus b on e.empId = b.empId where bonus < 1000 OR bonus is NULL
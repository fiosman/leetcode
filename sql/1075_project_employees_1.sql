SELECT project_id, ROUND(AVG(experience_years), 2) as average_years from project 
INNER JOIN employee ON employee.employee_id = project.employee_id 
GROUP BY project_id
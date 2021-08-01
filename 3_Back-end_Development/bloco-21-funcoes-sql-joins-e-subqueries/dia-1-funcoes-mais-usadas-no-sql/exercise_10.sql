SELECT DEPARTMENT_ID, AVG(SALARY) AS media_salarial, COUNT(*) AS numero_funcionarios
FROM hr.employees
GROUP BY DEPARTMENT_ID HAVING numero_funcionarios > 10;
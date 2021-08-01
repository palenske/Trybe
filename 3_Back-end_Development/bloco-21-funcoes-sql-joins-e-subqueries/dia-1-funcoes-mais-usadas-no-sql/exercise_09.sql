SELECT JOB_ID, AVG(SALARY) as media_salarial FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID ORDER BY media_salarial DESC;
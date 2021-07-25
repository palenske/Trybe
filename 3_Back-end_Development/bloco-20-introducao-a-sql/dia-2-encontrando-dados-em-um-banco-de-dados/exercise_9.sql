SELECT 
    CONCAT('O projeto ',
            Name,
            ' precisou de ',
            Hours,
            ' horas para ser concluído.') AS resultado
FROM
    Projects;
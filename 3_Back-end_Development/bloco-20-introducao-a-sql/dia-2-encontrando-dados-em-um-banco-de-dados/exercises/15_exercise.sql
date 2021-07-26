SELECT 
    CONCAT('Existem ',
            COUNT(Name),
            ' cientistas na tabela Scientists.') AS resultado
FROM
    Scientists;
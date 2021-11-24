SELECT 
    M.title Título, B.rating Avaliação
FROM
    Pixar.Movies M
        INNER JOIN
    Pixar.BoxOffice B ON B.movie_id = M.id
ORDER BY Avaliação DESC;

-- SUBQUERY
SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (SELECT id FROM Pixar.Movies WHERE year > 2009);

-- INNER JOIN
SELECT M.Title, B.rating FROM Pixar.Movies M INNER JOIN Pixar.BoxOffice B ON B.movie_id = M.id
WHERE M.year > 2009;
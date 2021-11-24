-- SUBQUERY
SELECT Title
FROM Pixar.Movies
WHERE id
IN
(SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);

-- INNER JOIN
SELECT M.Title
FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B ON B.movie_id = M.id
WHERE B.rating > 7.5;

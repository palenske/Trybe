SELECT M.* FROM Pixar.Movies M INNER JOIN Pixar.BoxOffice B
ON M.id = B.movie_id
WHERE M.theater_id IS NOT NULL AND B.rating > 8;
SELECT
T.name, T.location,
M.title, M.director, M.year, M.length_minutes
FROM Pixar.Theater T LEFT JOIN Pixar.Movies M ON M.theater_id = T.id
ORDER BY T.name;
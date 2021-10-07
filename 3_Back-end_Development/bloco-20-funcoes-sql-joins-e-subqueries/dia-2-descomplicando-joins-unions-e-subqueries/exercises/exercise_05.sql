SELECT T.*, M.* FROM
Pixar.Theater T
	RIGHT JOIN
Pixar.Movies M ON T.id = M.theater_id
ORDER BY T.name;

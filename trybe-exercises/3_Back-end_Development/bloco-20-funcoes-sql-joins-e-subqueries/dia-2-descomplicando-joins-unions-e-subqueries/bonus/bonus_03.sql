SELECT M.title FROM Pixar.Movies M
WHERE id IN (SELECT 
	movie_id FROM Pixar.BoxOffice
        WHERE (domestic_sales + international_sales) >= 500000000
		AND M.length_minutes > 110);
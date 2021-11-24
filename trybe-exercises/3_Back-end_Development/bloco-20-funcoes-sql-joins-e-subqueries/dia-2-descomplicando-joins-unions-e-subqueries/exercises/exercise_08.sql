SELECT name, location FROM Pixar.Theater T
WHERE EXISTS (SELECT * FROM Pixar.Movies WHERE theater_id =  T.id);
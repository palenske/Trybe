DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (1 , 6, 7, 8);
 
DELETE FROM Pixar.Movies 
WHERE
    length_minutes < 100;

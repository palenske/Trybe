DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (2 , 9);

DELETE FROM Pixar.Movies 
WHERE
    director = 'Andrew Staton';
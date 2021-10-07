SELECT M1.director, M1.title, M1.length_minutes, M2.title, M2.length_minutes FROM Pixar.Movies M1, Pixar.Movies M2
WHERE M1.director = M2.director AND M1.title <> M2.title ORDER BY M1.director;
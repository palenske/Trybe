SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    Pixar.BoxOffice AS B
        INNER JOIN
    Pixar.Movies AS M ON M.id = B.movie_id;

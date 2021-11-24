SELECT 
    M.title,
    (B.domestic_sales + B.international_sales) AS `Número de vendas`
FROM
    Pixar.BoxOffice AS B
        INNER JOIN
    Pixar.Movies AS M ON M.id = B.movie_id
WHERE
    B.international_sales > B.domestic_sales;

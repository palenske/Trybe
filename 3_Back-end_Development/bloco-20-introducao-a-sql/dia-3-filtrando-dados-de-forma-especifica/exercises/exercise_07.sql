SELECT 
    COUNT(*)
FROM
    PecasFornecedores.Vendas
WHERE
    DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
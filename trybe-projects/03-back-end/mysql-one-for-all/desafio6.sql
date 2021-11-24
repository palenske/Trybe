CREATE VIEW faturamento_atual AS
    SELECT 
        MIN(Pla.valor_plano) AS `faturamento_minimo`,
        MAX(Pla.valor_plano) AS `faturamento_maximo`,
        ROUND(AVG(Pla.valor_plano), 2) AS `faturamento_medio`,
        ROUND(SUM(Pla.valor_plano), 2) AS `faturamento_total`
    FROM
        SpotifyClone.Planos AS Pla
            INNER JOIN
        SpotifyClone.Usuarios AS Usu ON Usu.plano_id = Pla.plano_id;

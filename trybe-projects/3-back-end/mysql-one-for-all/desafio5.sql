CREATE VIEW top_2_hits_do_momento AS
    SELECT 
        Can.cancao AS cancao, COUNT(UsCa.cancao_id) AS reproducoes
    FROM
        SpotifyClone.Usuario_Cancao AS UsCa
            INNER JOIN
        SpotifyClone.Cancoes AS Can ON Can.cancao_id = UsCa.cancao_id
    GROUP BY UsCa.cancao_id
    ORDER BY reproducoes DESC , cancao
    LIMIT 2;

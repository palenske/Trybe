CREATE VIEW cancoes_premium AS
    SELECT 
        Can.cancao AS nome, COUNT(UsCa.cancao_id) AS reproducoes
    FROM
        SpotifyClone.Usuario_Cancao UsCa
            INNER JOIN
        SpotifyClone.Cancoes Can ON Can.cancao_id = UsCa.cancao_id
    WHERE
        UsCa.usuario_id IN (SELECT 
                usuario_id
            FROM
                SpotifyClone.Usuarios
            WHERE
                plano_id <> 1)
    GROUP BY nome
    ORDER BY nome;

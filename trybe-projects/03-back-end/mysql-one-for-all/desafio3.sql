CREATE VIEW historico_reproducao_usuarios AS
    SELECT 
        (Usu.usuario) AS usuario, (Can.cancao) AS nome
    FROM
        SpotifyClone.Usuario_Cancao AS UsCa
            INNER JOIN
        SpotifyClone.Usuarios AS Usu ON Usu.usuario_id = UsCa.usuario_id
            INNER JOIN
        SpotifyClone.Cancoes AS Can ON Can.cancao_id = UsCa.cancao_id
    ORDER BY usuario , nome;

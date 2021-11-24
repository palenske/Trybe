CREATE VIEW top_3_artistas AS
    SELECT 
        (Art.artista) AS artista,
        COUNT(UsAr.artista_id) AS seguidores
    FROM
        SpotifyClone.Usuario_Artista AS UsAr
            INNER JOIN
        SpotifyClone.Artistas AS Art ON Art.artista_id = UsAr.artista_id
    GROUP BY UsAr.artista_id
    ORDER BY seguidores DESC , artista
    LIMIT 3;

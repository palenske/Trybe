CREATE VIEW perfil_artistas AS
    SELECT 
        Art.artista AS artista,
        Alb.album AS album,
        COUNT(UsAr.artista_id) AS seguidores
    FROM
        SpotifyClone.Usuario_Artista AS UsAr
            INNER JOIN
        SpotifyClone.Artistas AS Art ON Art.artista_id = UsAr.artista_id
            INNER JOIN
        SpotifyClone.Albums AS Alb ON Alb.artista_id = UsAr.artista_id
    GROUP BY album , artista
    ORDER BY seguidores DESC , artista , album;

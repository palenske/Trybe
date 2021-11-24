CREATE VIEW estatisticas_musicais AS
    SELECT
        COUNT(Can.cancao_id) AS 'cancoes',
        COUNT(DISTINCT Art.artista_id) AS 'artistas',
        COUNT(DISTINCT Alb.album_id) AS 'albuns'
    FROM
        SpotifyClone.Cancoes AS Can
            INNER JOIN
        SpotifyClone.Albums AS Alb ON Can.album_id = Alb.album_id
            INNER JOIN
        SpotifyClone.Artistas AS Art ON Alb.artista_id = Art.artista_id;

DELIMITER $$
CREATE PROCEDURE albuns_do_artista (IN nome_artista VARCHAR(100))
BEGIN
select Art.artista as artista, Alb.album as album
FROM SpotifyClone.Artistas as Art
INNER JOIN SpotifyClone.Albums as Alb ON Alb.artista_id = Art.artista_id
WHERE Art.artista = nome_artista
ORDER BY album;
END $$
DELIMITER ;

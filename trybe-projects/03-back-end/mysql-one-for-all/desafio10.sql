USE `SpotifyClone`;

DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(id_do_usuario INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE numero_reproducoes INT;
SELECT 
    COUNT(usuario_id)
FROM
    SpotifyClone.Usuario_Cancao
WHERE
    usuario_id = id_do_usuario INTO numero_reproducoes;
RETURN numero_reproducoes;
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON SpotifyClone.Usuarios
FOR EACH ROW
BEGIN
DELETE FROM SpotifyClone.Usuario_Artista WHERE usuario_id = OLD.usuario_id;
DELETE FROM SpotifyClone.Usuario_Cancao WHERE usuario_id = OLD.usuario_id;
END $$
DELIMITER ;

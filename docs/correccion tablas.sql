-- USE master;
-- ALTER DATABASE ConocimientoUniversitario SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
-- DROP DATABASE ConocimientoUniversitario;
-- GO

use ConocimientoUniversitario
GO

ALTER TABLE knowledge_map_db.alianza
DROP CONSTRAINT fk_alianza_aliado;

ALTER TABLE knowledge_map_db.aliado_proyecto
DROP CONSTRAINT fk_aliado_proyecto_aliado;

GO

ALTER TABLE knowledge_map_db.aliado
ALTER COLUMN nit INT;
GO

ALTER TABLE knowledge_map_db.alianza
ALTER COLUMN aliado VARCHAR(255);

ALTER TABLE knowledge_map_db.aliado_proyecto
ALTER COLUMN aliado VARCHAR(255);
GO


ALTER TABLE knowledge_map_db.alianza
ADD CONSTRAINT fk_alianza_aliado FOREIGN KEY (aliado)
REFERENCES knowledge_map_db.aliado (nit)
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE knowledge_map_db.aliado_proyecto
ADD CONSTRAINT fk_aliado_proyecto_aliado FOREIGN KEY (aliado)
REFERENCES knowledge_map_db.aliado (nit)
ON DELETE NO ACTION ON UPDATE NO ACTION;

GO
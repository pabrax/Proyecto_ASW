-- para borrar la base de datos, ejecutar de forma individual en caso de que se necesite

-- USE master;
-- ALTER DATABASE ConocimientoUniversitario SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
-- DROP DATABASE ConocimientoUniversitario;
-- GO


use master
go

CREATE DATABASE ConocimientoUniversitario
go

use ConocimientoUniversitario
go

-- SQL Server Script generado por conversión manual
-- Creación del esquema knowledge_map_db
CREATE SCHEMA knowledge_map_db;
GO

-- Tabla universidad
CREATE TABLE knowledge_map_db.universidad (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL
);
GO

-- Tabla facultad
CREATE TABLE knowledge_map_db.facultad (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  fecha_fun DATE NOT NULL,
  universidad INT NOT NULL,
  CONSTRAINT fk_unidad_sede FOREIGN KEY (universidad)
    REFERENCES knowledge_map_db.universidad (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla programa
CREATE TABLE knowledge_map_db.programa (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  nivel NVARCHAR(45) NOT NULL,
  fecha_creacion NVARCHAR(45) NOT NULL,
  fecha_cierre NVARCHAR(45) NULL,
  numero_cohortes NVARCHAR(45) NOT NULL,
  cant_graduados NVARCHAR(45) NOT NULL,
  fecha_actualizacion NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL,
  facultad INT NOT NULL,
  CONSTRAINT fk_programa_facultad FOREIGN KEY (facultad)
    REFERENCES knowledge_map_db.facultad (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla linea_investigacion
CREATE TABLE knowledge_map_db.linea_investigacion (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(256) NOT NULL
);
GO

-- Tabla docente
CREATE TABLE knowledge_map_db.docente (
  cedula INT NOT NULL PRIMARY KEY,
  nombres NVARCHAR(60) NOT NULL,
  apellidos NVARCHAR(60) NOT NULL,
  genero NVARCHAR(12) NOT NULL,
  cargo NVARCHAR(30) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  correo NVARCHAR(70) NOT NULL,
  telefono NVARCHAR(20) NOT NULL,
  url_cvlac NVARCHAR(128) NOT NULL,
  fecha_actualizacion DATE NOT NULL,
  escalafon NVARCHAR(45) NOT NULL,
  perfil NVARCHAR(MAX) NOT NULL,
  cat_minciencia NVARCHAR(45) NULL,
  conv_minciencia NVARCHAR(45) NOT NULL,
  nacionalidad NVARCHAR(45) NOT NULL,
  linea_investigacion_principal INT NULL
  -- CONSTRAINT fk_docente_linea_investigacion FOREIGN KEY (linea_investigacion_principal)
  --   REFERENCES knowledge_map_db.linea_investigacion (id)
  --   ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla estudios_realizados
CREATE TABLE knowledge_map_db.estudios_realizados (
  id INT NOT NULL PRIMARY KEY,
  titulo NVARCHAR(45) NOT NULL,
  universidad NVARCHAR(50) NOT NULL,
  fecha DATE NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL,
  docente INT NOT NULL,
  ins_acreditada BIT NOT NULL,
  metodologia NVARCHAR(45) NOT NULL,
  perfil_egresado NVARCHAR(MAX) NOT NULL,
  pais NVARCHAR(45) NOT NULL,
  CONSTRAINT fk_estudio_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aliado
CREATE TABLE knowledge_map_db.aliado (
  nit INT NOT NULL PRIMARY KEY,
  razon_social NVARCHAR(60) NOT NULL,
  nombre_contacto NVARCHAR(60) NOT NULL,
  correo NVARCHAR(70) NOT NULL,
  telefono NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL
);
GO

-- Tabla proyecto
CREATE TABLE knowledge_map_db.proyecto (
  id INT NOT NULL PRIMARY KEY,
  titulo NVARCHAR(70) NOT NULL,
  resumen NVARCHAR(256) NOT NULL,
  presupuesto FLOAT NOT NULL,
  tipo_financiacion NVARCHAR(45) NOT NULL,
  tipo_fondos NVARCHAR(45) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL
);
GO

-- Tabla tipo_producto
CREATE TABLE knowledge_map_db.tipo_producto (
  id INT NOT NULL PRIMARY KEY,
  categoria NVARCHAR(45) NOT NULL,
  clase NVARCHAR(45) NOT NULL,
  nombre NVARCHAR(45) NOT NULL,
  tipologia NVARCHAR(45) NOT NULL
);
GO

-- Tabla producto
CREATE TABLE knowledge_map_db.producto (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  categoria NVARCHAR(45) NOT NULL,
  fecha_entrega DATE NOT NULL,
  proyecto INT NULL,
  tipo_producto INT NOT NULL,
  CONSTRAINT fk_producto_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_producto_tipo_producto FOREIGN KEY (tipo_producto)
    REFERENCES knowledge_map_db.tipo_producto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla termino_clave
CREATE TABLE knowledge_map_db.termino_clave (
  termino NVARCHAR(30) NOT NULL PRIMARY KEY,
  termino_ingles NVARCHAR(30) NULL
);
GO

-- Tabla area_aplicacion
CREATE TABLE knowledge_map_db.area_aplicacion (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL
);
GO

-- Tabla objetivo_desarrollo_sostenible
CREATE TABLE knowledge_map_db.objetivo_desarrollo_sostenible (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  categoria NVARCHAR(45) NOT NULL
);
GO

-- Tabla area_conocimiento
CREATE TABLE knowledge_map_db.area_conocimiento (
  id INT NOT NULL PRIMARY KEY,
  gran_area NVARCHAR(60) NOT NULL,
  area NVARCHAR(60) NOT NULL,
  disciplina NVARCHAR(60) NOT NULL
);
GO

-- Tabla grupo_investigacion
CREATE TABLE knowledge_map_db.grupo_investigacion (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  url_gruplac NVARCHAR(128) NULL,
  categoria NVARCHAR(10) NULL,
  convocatoria NVARCHAR(10) NULL,
  fecha_fundacion DATE NOT NULL,
  universidad INT NULL,
  interno BIT NOT NULL,
  ambito NVARCHAR(45) NOT NULL,
  CONSTRAINT fk_grupo_investigacion_sede FOREIGN KEY (universidad)
    REFERENCES knowledge_map_db.universidad (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla semillero
CREATE TABLE knowledge_map_db.semillero (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  fecha_fundacion DATE NOT NULL,
  grupo_investigacion INT NOT NULL,
  CONSTRAINT fk_semillero_grupo_investigacion FOREIGN KEY (grupo_investigacion)
    REFERENCES knowledge_map_db.grupo_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla semillero_linea
CREATE TABLE knowledge_map_db.semillero_linea (
  semillero INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (semillero, linea_investigacion),
  CONSTRAINT fk_semillero_linea_semillero FOREIGN KEY (semillero)
    REFERENCES knowledge_map_db.semillero (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_semillero_linea_linea FOREIGN KEY (linea_investigacion)
    REFERENCES knowledge_map_db.linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla grupo_linea
CREATE TABLE knowledge_map_db.grupo_linea (
  grupo_investigacion INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (grupo_investigacion, linea_investigacion),
  CONSTRAINT fk_grupo_linea_grupo FOREIGN KEY (grupo_investigacion)
    REFERENCES knowledge_map_db.grupo_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_grupo_linea_linea FOREIGN KEY (linea_investigacion)
    REFERENCES knowledge_map_db.linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla docente_departamento
CREATE TABLE knowledge_map_db.docente_departamento (
  docente INT NOT NULL,
  departamento INT NOT NULL,
  dedicacion NVARCHAR(15) NOT NULL,
  modalidad NVARCHAR(45) NOT NULL,
  fecha_ingreso DATE NOT NULL,
  fecha_salida DATE NULL,
  PRIMARY KEY (docente, departamento),
  CONSTRAINT fk_docente_departamento_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
  -- CONSTRAINT fk_docente_departamento_departamento FOREIGN KEY (departamento)
  --   REFERENCES knowledge_map_db.programa (id)
  --   ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla participa_semillero
CREATE TABLE knowledge_map_db.participa_semillero (
  docente INT NOT NULL,
  semillero INT NOT NULL,
  rol NVARCHAR(15) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  PRIMARY KEY (docente, semillero),
  CONSTRAINT fk_participa_semillero_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_participa_semillero_semillero FOREIGN KEY (semillero)
    REFERENCES knowledge_map_db.semillero (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla participa_grupo
CREATE TABLE knowledge_map_db.participa_grupo (
  docente_cedula INT NOT NULL,
  grupo_investigacion_id INT NOT NULL,
  rol NVARCHAR(15) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  PRIMARY KEY (docente_cedula, grupo_investigacion_id),
  CONSTRAINT fk_participa_grupo_docente FOREIGN KEY (docente_cedula)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_participa_grupo_grupo FOREIGN KEY (grupo_investigacion_id)
    REFERENCES knowledge_map_db.grupo_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla alianza
CREATE TABLE knowledge_map_db.alianza (
  aliado INT NOT NULL,
  departamento INT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  docente INT NULL,
  PRIMARY KEY (aliado, departamento),
  CONSTRAINT fk_alianza_aliado FOREIGN KEY (aliado)
    REFERENCES knowledge_map_db.aliado (nit)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  -- CONSTRAINT fk_alianza_departamento FOREIGN KEY (departamento)
  --   REFERENCES knowledge_map_db.programa (id)
  --   ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_alianza_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aliado_proyecto
CREATE TABLE knowledge_map_db.aliado_proyecto (
  aliado INT NOT NULL,
  proyecto INT NOT NULL,
  PRIMARY KEY (aliado, proyecto),
  CONSTRAINT fk_aliado_proyecto_aliado FOREIGN KEY (aliado)
    REFERENCES knowledge_map_db.aliado (nit)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aliado_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla desarrolla
CREATE TABLE knowledge_map_db.desarrolla (
  docente INT NOT NULL,
  proyecto INT NOT NULL,
  rol NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(256) NOT NULL,
  PRIMARY KEY (docente, proyecto),
  CONSTRAINT fk_desarrolla_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_desarrolla_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla palabras_clave
CREATE TABLE knowledge_map_db.palabras_clave (
  proyecto INT NOT NULL,
  termino_clave NVARCHAR(30) NOT NULL,
  PRIMARY KEY (proyecto, termino_clave),
  CONSTRAINT fk_palabras_clave_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_palabras_clave_termino_clave FOREIGN KEY (termino_clave)
    REFERENCES knowledge_map_db.termino_clave (termino)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ac_proyecto
CREATE TABLE knowledge_map_db.ac_proyecto (
  proyecto INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (proyecto, area_conocimiento),
  CONSTRAINT fk_ac_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ac_proyecto_area_conocimiento FOREIGN KEY (area_conocimiento)
    REFERENCES knowledge_map_db.area_conocimiento (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla proyecto_linea
CREATE TABLE knowledge_map_db.proyecto_linea (
  proyecto INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (proyecto, linea_investigacion),
  CONSTRAINT fk_proyecto_linea_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_proyecto_linea_linea_investigacion FOREIGN KEY (linea_investigacion)
    REFERENCES knowledge_map_db.linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ods_proyecto
CREATE TABLE knowledge_map_db.ods_proyecto (
  proyecto INT NOT NULL,
  ods INT NOT NULL,
  PRIMARY KEY (proyecto, ods),
  CONSTRAINT fk_ods_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ods_proyecto_ods FOREIGN KEY (ods)
    REFERENCES knowledge_map_db.objetivo_desarrollo_sostenible (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aa_proyecto
CREATE TABLE knowledge_map_db.aa_proyecto (
  proyecto INT NOT NULL,
  area_aplicacion INT NOT NULL,
  PRIMARY KEY (proyecto, area_aplicacion),
  CONSTRAINT fk_aa_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES knowledge_map_db.proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aa_proyecto_area_aplicacion FOREIGN KEY (area_aplicacion)
    REFERENCES knowledge_map_db.area_aplicacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ac_linea
CREATE TABLE knowledge_map_db.ac_linea (
  linea_investigacion INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (linea_investigacion, area_conocimiento),
  CONSTRAINT fk_ac_linea_linea_investigacion FOREIGN KEY (linea_investigacion)
    REFERENCES knowledge_map_db.linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ac_linea_area_conocimie FOREIGN KEY (area_conocimiento)
    REFERENCES knowledge_map_db.area_conocimiento (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ods_linea
CREATE TABLE knowledge_map_db.ods_linea (
  linea_investigacion INT NOT NULL,
  ods INT NOT NULL,
  PRIMARY KEY (linea_investigacion, ods),
  CONSTRAINT fk_ods_linea_linea FOREIGN KEY (linea_investigacion)
    REFERENCES knowledge_map_db.linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ods_linea_ods FOREIGN KEY (ods)
    REFERENCES knowledge_map_db.objetivo_desarrollo_sostenible (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aa_linea
CREATE TABLE knowledge_map_db.aa_linea (
  area_aplicacion INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (area_aplicacion, linea_investigacion),
  CONSTRAINT fk_aa_linea_area_aplicacion FOREIGN KEY (area_aplicacion)
    REFERENCES knowledge_map_db.area_aplicacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aa_linea_linea_investigacion FOREIGN KEY (linea_investigacion)
    REFERENCES knowledge_map_db.linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla docente_producto
CREATE TABLE knowledge_map_db.docente_producto (
  docente INT NOT NULL,
  producto INT NOT NULL,
  PRIMARY KEY (docente, producto),
  CONSTRAINT fk_docente_producto_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_docente_producto_producto FOREIGN KEY (producto)
    REFERENCES knowledge_map_db.producto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla estudio_ac
CREATE TABLE knowledge_map_db.estudio_ac (
  estudio INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (estudio, area_conocimiento),
  CONSTRAINT fk_estudio_ac_estudio FOREIGN KEY (estudio)
    REFERENCES knowledge_map_db.estudios_realizados (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
  -- CONSTRAINT fk_estudio_ac_area_conocimiento FOREIGN KEY (area_conocimiento)
  --   REFERENCES knowledge_map_db.area_conocimiento (id)
  --   ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla apoyo_profesoral
CREATE TABLE knowledge_map_db.apoyo_profesoral (
  estudios INT NOT NULL,
  con_apoyo BIT NOT NULL,
  institucion NVARCHAR(45) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  PRIMARY KEY (estudios),
  CONSTRAINT fk_apoyo_profesoral_estudios1 FOREIGN KEY (estudios)
    REFERENCES knowledge_map_db.estudios_realizados (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla beca
CREATE TABLE knowledge_map_db.beca (
  estudios INT NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  institucion NVARCHAR(80) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  PRIMARY KEY (estudios),
  CONSTRAINT fk_beca_estudios1 FOREIGN KEY (estudios)
    REFERENCES knowledge_map_db.estudios_realizados (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla evaluacion_docente
CREATE TABLE knowledge_map_db.evaluacion_docente (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  calificacion FLOAT NOT NULL,
  semestre NVARCHAR(45) NOT NULL,
  docente INT NOT NULL,
  CONSTRAINT fk_evaluacion_docente_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla reconocimiento
CREATE TABLE knowledge_map_db.reconocimiento (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  fecha DATE NOT NULL,
  institucion NVARCHAR(45) NOT NULL,
  nombre NVARCHAR(45) NOT NULL,
  ambito NVARCHAR(45) NOT NULL,
  docente INT NOT NULL,
  CONSTRAINT fk_reconocimiento_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla red
CREATE TABLE knowledge_map_db.red (
  idr INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  url NVARCHAR(45) NOT NULL,
  pais NVARCHAR(45) NOT NULL
);
GO

-- Tabla red_docente
CREATE TABLE knowledge_map_db.red_docente (
  red INT NOT NULL,
  docente INT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin NVARCHAR(45) NULL,
  act_destacadas NVARCHAR(MAX) NOT NULL,
  PRIMARY KEY (red, docente),
  CONSTRAINT fk_red_docente_redes FOREIGN KEY (red)
    REFERENCES knowledge_map_db.red (idr)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_red_docente_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla experiencia
CREATE TABLE knowledge_map_db.experiencia (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  nombre_cargo NVARCHAR(45) NOT NULL,
  institucion NVARCHAR(45) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  docente INT NOT NULL,
  CONSTRAINT fk_experiencia_docente FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla programa_ac
CREATE TABLE knowledge_map_db.programa_ac (
  programa INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (programa, area_conocimiento),
  CONSTRAINT fk_programa_ac_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_programa_ac_area_conocimiento FOREIGN KEY (area_conocimiento)
    REFERENCES knowledge_map_db.area_conocimiento (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla acreditacion
CREATE TABLE knowledge_map_db.acreditacion (
  resolucion INT NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  calificacion NVARCHAR(45) NOT NULL,
  fecha_inicio NVARCHAR(45) NOT NULL,
  fecha_fin NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_acreditacion_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla registro_calificado
CREATE TABLE knowledge_map_db.registro_calificado (
  codigo INT NOT NULL PRIMARY KEY,
  cant_creditos NVARCHAR(45) NOT NULL,
  hora_acom NVARCHAR(45) NOT NULL,
  hora_ind NVARCHAR(45) NOT NULL,
  metodologia NVARCHAR(45) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  duracion_anios NVARCHAR(45) NOT NULL,
  duracion_semestres NVARCHAR(45) NOT NULL,
  tipo_titulacion NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_registro_calificado_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla activ_academica
CREATE TABLE knowledge_map_db.activ_academica (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  num_creditos INT NOT NULL,
  tipo NVARCHAR(20) NOT NULL,
  area_formacion NVARCHAR(45) NOT NULL,
  h_acom INT NOT NULL,
  h_indep INT NOT NULL,
  idioma NVARCHAR(45) NOT NULL,
  espejo BIT NOT NULL,
  entidad_espejo NVARCHAR(45) NOT NULL,
  pais_espejo NVARCHAR(45) NOT NULL,
  disenio INT NULL,
  CONSTRAINT fk_activ_academicas_programa FOREIGN KEY (disenio)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla enfoque
CREATE TABLE knowledge_map_db.enfoque (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL
);
GO

-- Tabla enfoque_rc
CREATE TABLE knowledge_map_db.enfoque_rc (
  enfoque INT NOT NULL,
  registro_calificado INT NOT NULL,
  PRIMARY KEY (enfoque, registro_calificado),
  CONSTRAINT fk_enfoque_rc_enfoque FOREIGN KEY (enfoque)
    REFERENCES knowledge_map_db.enfoque (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_enfoque_rc_registro_calificado FOREIGN KEY (registro_calificado)
    REFERENCES knowledge_map_db.registro_calificado (codigo)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aspecto_normativo
CREATE TABLE knowledge_map_db.aspecto_normativo (
  id INT NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL,
  fuente NVARCHAR(45) NOT NULL
);
GO

-- Tabla an_programa
CREATE TABLE knowledge_map_db.an_programa (
  aspecto_normativo INT NOT NULL,
  programa INT NOT NULL,
  PRIMARY KEY (aspecto_normativo, programa),
  CONSTRAINT fk_an_programa_aspecto_normativo FOREIGN KEY (aspecto_normativo)
    REFERENCES knowledge_map_db.aspecto_normativo (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_an_programa_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla practica_estrategia
CREATE TABLE knowledge_map_db.practica_estrategia (
  id INT NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL
);
GO

-- Tabla programa_pe
CREATE TABLE knowledge_map_db.programa_pe (
  programa INT NOT NULL,
  practica_estrategia INT NOT NULL,
  PRIMARY KEY (programa, practica_estrategia),
  CONSTRAINT fk_programa_pe_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_programa_pe_practica_estrategia FOREIGN KEY (practica_estrategia)
    REFERENCES knowledge_map_db.practica_estrategia (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aa_rc
CREATE TABLE knowledge_map_db.aa_rc (
  activ_academicas_idcurso INT NOT NULL,
  registro_calificado_codigo INT NOT NULL,
  componente NVARCHAR(45) NOT NULL,
  semestre NVARCHAR(45) NOT NULL,
  PRIMARY KEY (activ_academicas_idcurso, registro_calificado_codigo),
  CONSTRAINT fk_aa_rc_activ_academica FOREIGN KEY (activ_academicas_idcurso)
    REFERENCES knowledge_map_db.activ_academica (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aa_rc_registro_calificado FOREIGN KEY (registro_calificado_codigo)
    REFERENCES knowledge_map_db.registro_calificado (codigo)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla pasantia
CREATE TABLE knowledge_map_db.pasantia (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  pais NVARCHAR(45) NOT NULL,
  empresa NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_pasantia_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla premio
CREATE TABLE knowledge_map_db.premio (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL,
  fecha DATE NOT NULL,
  entidad_otorgante NVARCHAR(45) NOT NULL,
  pais NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_premio_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla car_innovacion
CREATE TABLE knowledge_map_db.car_innovacion (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(MAX) NOT NULL,
  tipo NVARCHAR(45) NOT NULL
);
GO

-- Tabla programa_ci
CREATE TABLE knowledge_map_db.programa_ci (
  programa INT NOT NULL,
  car_innovacion INT NOT NULL,
  PRIMARY KEY (programa, car_innovacion),
  CONSTRAINT fk_programa_ci_programa FOREIGN KEY (programa)
    REFERENCES knowledge_map_db.programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_programa_ci_car_innovacion FOREIGN KEY (car_innovacion)
    REFERENCES knowledge_map_db.car_innovacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla intereses_futuros
CREATE TABLE knowledge_map_db.intereses_futuros (
  docente INT NOT NULL,
  termino_clave NVARCHAR(30) NOT NULL,
  PRIMARY KEY (docente, termino_clave),
  CONSTRAINT fk_intereses_futuros_termino_clave FOREIGN KEY (docente)
    REFERENCES knowledge_map_db.docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
  -- CONSTRAINT fk_intereses_futuros_docente FOREIGN KEY (termino_clave)
  --   REFERENCES knowledge_map_db.termino_clave (termino)
  --   ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO


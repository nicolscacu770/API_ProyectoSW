CREATE DATABASE IF NOT EXIST proyectoSW;

USE proyectoSW;

CREATE TABLE IF NOT EXISTS `estudiantes` (
  `codigo` varchar(10) NOT NULL DEFAULT '',
  `correo` varchar(50) NOT NULL DEFAULT '',
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `apellido` varchar(50) NOT NULL DEFAULT '',
  `telefono` varchar(50) DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `carrera` varchar(50) DEFAULT '',
  `semestre` int unsigned DEFAULT '0',
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `encuentros` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`materia` VARCHAR(50) NOT NULL,
	`docente` VARCHAR(50) NULL,
	`fecha` DATE NOT NULL,
	`hora` TIME NOT NULL,
	`aula` VARCHAR(50) NULL DEFAULT NULL,
	`num_estudiantes` INT NULL,
	PRIMARY KEY (`id`)
)

CREATE TABLE IF NOT EXISTS `ingresos` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`fecha` DATE NULL DEFAULT NULL,
	`hora` TIME NULL DEFAULT NULL,
	`aula` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`materia` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE IF NOT EXISTS`materias` (
	`codigo` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`nombre` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`num_creditos` INT(10) NOT NULL DEFAULT '0',
	`cupos` INT(10) NOT NULL DEFAULT '0',
	`aula` VARCHAR(50) NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`docente` VARCHAR(50) NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`horario` VARCHAR(50) NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`codigo`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE IF NOT EXISTS`docentes` (
	`codigo` INT(10) NOT NULL,
	`correo` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`nombre` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`apellido` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`telefono` VARCHAR(50) NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`carrera` VARCHAR(50) NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`codigo`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE IF NOT EXISTS`carreras` (
	`codigo` INT(10) NOT NULL,
	`nombre` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`codigo`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;


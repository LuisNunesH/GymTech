CREATE DATABASE gymtech;

USE gymtech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE imc (
	idIMC INT PRIMARY KEY AUTO_INCREMENT,
	tipo VARCHAR(30),
	valor DECIMAL(3,1),
	fkUsuario INT,
	CONSTRAINT cons_fk_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);


CREATE DATABASE gymtech;
USE gymtech;
DROP DATABASE gymtech;
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
select * from usuario;
CREATE TABLE imc (

	idIMC INT PRIMARY KEY AUTO_INCREMENT,
	tipo VARCHAR(30),
	valor DECIMAL(3,1) check (valor > 0 and valor < 45),
	fkUsuario INT,
	CONSTRAINT cons_fk_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);
select * from imc;
CREATE TABLE frequencia (
	idFREQUENCIA INT PRIMARY KEY AUTO_INCREMENT,
	qtd DECIMAL(4,1),
	fkUsuario INT,
	CONSTRAINT cons_fk_usuario2 FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);
SELECT valor FROM imc JOIN usuario on idIMC = 1 where idIMC = 1;
SELECT valor FROM imc where fkUsuario = 1;
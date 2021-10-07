DROP DATABASE IF EXISTS ZooDB;
CREATE SCHEMA ZooDB;
USE ZooDB;

CREATE TABLE animal(
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL
);

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL
);

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	gerente_id INT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal_cuidador(
	cuidador_id INT,
	animal_id INT,
	CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
	FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
	FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);

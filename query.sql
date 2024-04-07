USE `lab-db`;

CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT,
    midterm_grade DECIMAL(5,2),
    final_grade DECIMAL(5,2),
    PRIMARY KEY (`id`)
);
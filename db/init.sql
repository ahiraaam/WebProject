CREATE TABLE humans(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100),
	age INT
);

INSERT INTO humans (name, age) VALUES ("Alice", 123), ("Bob", 456);
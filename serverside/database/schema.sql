DROP DATABASE IF EXISTS gamestore;
CREATE DATABASE gamestore;
USE gamestore;
CREATE TABLE admindash (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(65),
    lastname varchar(65),
    email varchar(255),
    password varchar(255),
    PRIMARY KEY(id)
);
CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    fullname varchar(65),
    email varchar(255),
    password varchar(255),
    PRIMARY KEY(id)
);
CREATE TABLE products (
    product_id int NOT NULL AUTO_INCREMENT,
    title varchar(50),
    description varchar(255),
    price int,
    picture varchar(64),
    counters int,
    stock boolean ,
    PRIMARY KEY(product_id)
);

CREATE TABLE wishlist (
    wishlist_id int NOT NULL AUTO_INCREMENT,
    products_id int,
    user_id int,
    FOREIGN KEY (products_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    PRIMARY KEY(wishlist_id)
);

CREATE TABLE achat (
    order_id int NOT NULL AUTO_INCREMENT,
    quantity int ,
    products_id int,
    user_id int,
    FOREIGN KEY (products_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    PRIMARY KEY (order_id)
);


INSERT INTO user (fullname, email, password)
VALUES ('mortadha', 'morta@gmail.com','123456');
INSERT INTO products (title, description, price,picture,counters)
VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);
INSERT INTO user (fullname, email, password)
VALUES ('mortadha', 'morta@gmail.com','123456');
INSERT INTO products (title, description, price,picture,counters)
VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);
INSERT INTO user (fullname, email, password)
VALUES ('mortadha', 'morta@gmail.com','123456');
INSERT INTO products (title, description, price,picture,counters)
VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);
INSERT INTO user (fullname, email, password)
VALUES ('mortadha', 'morta@gmail.com','123456');
INSERT INTO products (title, description, price,picture,counters)
VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);
INSERT INTO user (fullname, email, password)
VALUES ('mortadha', 'morta@gmail.com','123456');
INSERT INTO products (title, description, price,picture,counters)
VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);

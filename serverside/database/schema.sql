DROP DATABASE IF EXISTS gamestore;
CREATE DATABASE gamestore;
USE gamestore;
CREATE TABLE admindash (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(65),
    lastname varchar(65),
    email varchar(255),
    password varchar(255),
    picture varchar(255),
    PRIMARY KEY(id)
);
CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(65),
    lastname varchar(65),
    email varchar(255),
    password varchar(255),
    picture varchar(600),
    PRIMARY KEY(id)
);
CREATE TABLE products (
    product_id int NOT NULL AUTO_INCREMENT,
    title varchar(50),
    description varchar(255),
    price int,
    picture varchar(600),
    stock varchar(50) ,
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


INSERT INTO admindash (firstname,lastname, email, password,picture)
VALUES ('mortadha','abidi' ,'morta@gmail.com','123456','https://th.bing.com/th/id/R.3f3777f8521a5ccc96a6283ba0542bc2?rik=u%2bMaPPA1TtqSQQ&pid=ImgRaw&r=0');
INSERT INTO user (firstname,lastname, email, password,picture) 
VALUES ('Hamdi',"benabdallah" ,'hamdi@gmail.com','123456',"https://th.bing.com/th/id/OIP.acbbe01WbCLdalq1MjIfEQHaJX?pid=ImgDet&rs=1");
INSERT INTO user (firstname,lastname, email, password,picture) 
VALUES ('aziz',"aziza" ,'maziz@gmail.com','123456',"https://img.wallpapersafari.com/desktop/1280/1024/23/4/8SlI51.jpg");
INSERT INTO user (firstname,lastname, email, password,picture) 
VALUES ('ayoub',"ayoub" ,'ayoub@gmail.com','123456',"https://th.bing.com/th/id/R.90095bd0ea45b2da2fb97980d257aa09?rik=tjuMnUK8AGxyqw&riu=http%3a%2f%2fi.imgur.com%2fTzPUFUB.jpg&ehk=hcVEmwISAh3DCDn4rUPXBe65AlQ%2fQuqmH4oxUWTrN2I%3d&risl=&pid=ImgRaw&r=0");
INSERT INTO user (firstname,lastname, email, password,picture) 
VALUES ('sami',"mdhafer" ,'sami@gmail.com','123456',"https://th.bing.com/th/id/R.9db6391db6c963f720fa7b92e128dd88?rik=Aod7HsMIJerjaQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-XQMBByrDhng%2fVki9w-n1DeI%2fAAAAAAAAB_I%2fIRPzyGMD1JU%2fw1200-h630-p-k-no-nu%2f1.jpg&ehk=dE6LrYkaCxrnnUI3GITdWKErkV1MR8nWg8mrTho2Eyc%3d&risl=&pid=ImgRaw&r=0");

INSERT INTO products (title, description, price,picture,stock)
VALUES ('league of legend', 'on line game',123,'https://64.media.tumblr.com/6178a65e923bbaf971147d6f5f22e123/tumblr_pxosh07JBW1yv28bio1_640.png',"available");
INSERT INTO products (title, description, price,picture,stock)
VALUES ('need for speed', 'solo game',24,'https://images.playerone.tv/source/jeux/need_for_speed_underground_2/need_for_speed_underground_2-2-555b435dc5543.jpeg',"not availble");
INSERT INTO products (title, description, price,picture,stock)
VALUES ('CS go', 'on line game',45,'https://th.bing.com/th/id/OIP.eg5BZWity8V3WY9DytEVywHaEK?pid=ImgDet&rs=1',"available");
INSERT INTO products (title, description, price,picture,stock)
VALUES ('call of duty', 'on line game',150,'https://th.bing.com/th/id/R.d6cdb86590ed9b695efa8eea16cd3b83?rik=1cKUxr%2bjxJvmrg&riu=http%3a%2f%2fblog.emp-online.it%2fwp-content%2fuploads%2f2016%2f10%2fcall-of-duty-black-ops.jpg&ehk=JUxx3gkvHk%2fgNOkzq6Ls49yJ4eH6mdnTn4oHn0BdSP0%3d&risl=&pid=ImgRaw&r=0',"available");
INSERT INTO products (title, description, price,picture,stock)
VALUES ('world of carft', 'on line game',24,'https://th.bing.com/th/id/R.1c7c901656206d09011300e0cee334b3?rik=KI%2fVYeJCXOnG3Q&pid=ImgRaw&r=0',"not availble");
INSERT INTO products (title, description, price,picture,stock)
VALUES ('red dead redemption2', 'solo game',90,'https://i.jeuxactus.com/datas/jeux/r/e/red-dead-redemption-2/xl/red-dead-redemption-2-5bd3016c4f57a.jpg',"not availble");
-- INSERT INTO user (fullname, email, password)
-- VALUES ('mortadha', 'morta@gmail.com','123456');
-- INSERT INTO products (title, description, price,picture,counters)
-- VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);
-- INSERT INTO user (fullname, email, password)
-- VALUES ('mortadha', 'morta@gmail.com','123456');
-- INSERT INTO products (title, description, price,picture,counters)
-- VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);
-- INSERT INTO user (fullname, email, password)
-- VALUES ('mortadha', 'morta@gmail.com','123456');
-- INSERT INTO products (title, description, price,picture,counters)
-- VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);
-- INSERT INTO user (fullname, email, password)
-- VALUES ('mortadha', 'morta@gmail.com','123456');
-- INSERT INTO products (title, description, price,picture,counters)
-- VALUES ('mortadha', 'morta@gmail.com',123456,'dfaez',2);

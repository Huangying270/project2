CREATE DATABASE users_DB;

USE users_DB;

CREATE TABLE user_login(
    id INTEGER(10)
    AUTO_INCREMENT NOT NULL,
username VARCHAR
    (20) NOT NULL,
password VARCHAR
    (100) NOT NULL,
PRIMARY KEY
    (id)
);

    CREATE TABLE user_info(
        id INTEGER(10)
        AUTO_INCREMENT NOT NULL,
        websiteName VARCHAR(100) NOT NULL,
    savedUsername VARCHAR
        (100) NOT NULL,
savedPassword VARCHAR
        (100) NOT NULL,
PRIMARY KEY
        (id)
)
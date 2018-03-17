create database burger_db;

create table burgers(
    id int(5) auto increment,
    name varchar(50) not null,
    eaten boolean not null,
    primary key(id)
);
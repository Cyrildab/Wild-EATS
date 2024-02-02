create table restaurant (
  id int primary key auto_increment not null,
  source varchar(150) not null,
  restaurant_name varchar(50) not null,
  alt varchar(300) not null,
  categorie varchar(50) not null,
  distance varchar(80) not null,
  price varchar(20) not null,
  adress varchar(100) not null, 
  phone int not null, 
  schedules varchar(100) not null
);

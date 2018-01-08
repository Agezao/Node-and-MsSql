create database nodedb
go

use nodedb
go

CREATE TABLE Users (
  [id] INT NOT NULL IDENTITY,
  [email] VARCHAR(80) NOT NULL UNIQUE,
  [name] VARCHAR(50) NOT NULL,
  [password] CHAR(41) NOT NULL,
  PRIMARY KEY (id)
)
go
CREATE TABLE Lists (
  [id] INT NOT NULL IDENTITY,
  [filename] VARCHAR(80) NOT NULL UNIQUE,
  [description] VARCHAR(50),
  [user_id] int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES Users(id)
)
go

insert into Users Values
 ('1@1.com', 'Admin', '')
,('2@1.com', 'User number 2', '')
,('3@1.com', 'User number 3', '')
,('4@1.com', 'User number 4', '')
,('5@1.com', 'User number 5', '')
,('6@1.com', 'User number 6', '')
,('7@1.com', 'User number 7', '')
,('8@1.com', 'User number 8', '')
,('9@1.com', 'User number 9', '')
,('10@1.com', 'User number 10', '')
,('11@1.com', 'User number 11', '')
,('12@1.com', 'User number 12', '')
,('13@1.com', 'User number 13', '')
,('14@1.com', 'User number 14', '')
,('15@1.com', 'User number 15', '')
,('16@1.com', 'User number 16', '')
,('17@1.com', 'User number 17', '')
,('18@1.com', 'User number 18', '')
,('19@1.com', 'User number 19', '')
,('20@1.com', 'User number 20', '')
,('21@1.com', 'User number 21', '')
,('22@1.com', 'User number 22', '')
,('23@1.com', 'User number 23', '')
,('24@1.com', 'User number 24', '')
,('25@1.com', 'User number 25', '')
,('26@1.com', 'User number 26', '')
,('27@1.com', 'User number 27', '');
go

insert into Lists Values
 ('teste.csv', 'Arquivo teste', 1)
, ('teste1.csv', 'Arquivo teste 1', 1)
, ('teste2.csv', 'Arquivo teste 2', 2)
, ('teste3.csv', 'Arquivo teste 3', 3)
, ('teste4.csv', 'Arquivo teste 4', 4)
, ('teste5.csv', 'Arquivo teste 5', 5)
, ('teste6.csv', 'Arquivo teste 6', 6)
, ('teste7.csv', 'Arquivo teste 7', 7)
, ('teste8.csv', 'Arquivo teste 8', 8)
, ('teste9.csv', 'Arquivo teste 9', 9)
, ('teste10.csv', 'Arquivo teste 10', 10)
, ('teste11.csv', 'Arquivo teste 11', 11)
, ('teste12.csv', 'Arquivo teste 12', 12)
, ('teste13.csv', 'Arquivo teste 13', 13)
, ('teste14.csv', 'Arquivo teste 14', 14)
, ('teste15.csv', 'Arquivo teste 15', 15)
, ('teste16.csv', 'Arquivo teste 16', 16)
, ('teste17.csv', 'Arquivo teste 17', 17)
, ('teste18.csv', 'Arquivo teste 18', 18)
, ('teste19.csv', 'Arquivo teste 19', 19)
, ('teste20.csv', 'Arquivo teste 20', 20)
, ('teste21.csv', 'Arquivo teste 21', 21)
, ('teste22.csv', 'Arquivo teste 22', 22)
, ('teste23.csv', 'Arquivo teste 23', 23)
, ('teste24.csv', 'Arquivo teste 24', 24)
, ('teste25.csv', 'Arquivo teste 25', 25)
, ('teste26.csv', 'Arquivo teste 26', 26)
go

-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;

DROP TABLE `departmentEmailContacts`;


DROP TABLE `usersEmailContacts`;


DROP TABLE `departmentSmsContacts`;


DROP TABLE `usersSmsContacts`;


DROP TABLE `dispatches`;


DROP TABLE `users`;


DROP TABLE `emailContacts`;


DROP TABLE `smsContacts`;


DROP TABLE `departments`;



-- ************************************** `users`

CREATE TABLE `users`
(
 `id`       INT NOT NULL ,
 `username` VARCHAR(150) NOT NULL ,
 `password` VARCHAR(150) NOT NULL ,

PRIMARY KEY (`id`)
);





-- ************************************** `emailContacts`

CREATE TABLE `emailContacts`
(
 `id`    INT NOT NULL ,
 `email` VARCHAR(150) NOT NULL ,

PRIMARY KEY (`id`)
);





-- ************************************** `smsContacts`

CREATE TABLE `smsContacts`
(
 `id`            INT NOT NULL ,
 `phone`         VARCHAR(15) NOT NULL ,
 `carrier`       VARCHAR(45) NOT NULL ,
 `carrierSuffix` VARCHAR(45) NOT NULL ,

PRIMARY KEY (`id`)
);





-- ************************************** `departments`

CREATE TABLE `departments`
(
 `id`         INT NOT NULL ,
 `name`       VARCHAR(45) NOT NULL ,
 `abbrev`     VARCHAR(5) NOT NULL ,
 `parentDept` INT ,

PRIMARY KEY (`id`),
KEY `fkIdx_43` (`parentDept`),
CONSTRAINT `FK_43` FOREIGN KEY `fkIdx_43` (`parentDept`) REFERENCES `departments` (`id`)
);





-- ************************************** `departmentEmailContacts`

CREATE TABLE `departmentEmailContacts`
(
 `departmentId`   INT NOT NULL ,
 `emailContactId` INT NOT NULL ,

PRIMARY KEY (`departmentId`, `emailContactId`),
KEY `fkIdx_118` (`departmentId`),
CONSTRAINT `FK_118` FOREIGN KEY `fkIdx_118` (`departmentId`) REFERENCES `departments` (`id`),
KEY `fkIdx_122` (`emailContactId`),
CONSTRAINT `FK_122` FOREIGN KEY `fkIdx_122` (`emailContactId`) REFERENCES `emailContacts` (`id`)
);





-- ************************************** `usersEmailContacts`

CREATE TABLE `usersEmailContacts`
(
 `userId`         INT NOT NULL ,
 `emailContactId` INT NOT NULL ,

PRIMARY KEY (`userId`, `emailContactId`),
KEY `fkIdx_105` (`userId`),
CONSTRAINT `FK_105` FOREIGN KEY `fkIdx_105` (`userId`) REFERENCES `users` (`id`),
KEY `fkIdx_109` (`emailContactId`),
CONSTRAINT `FK_109` FOREIGN KEY `fkIdx_109` (`emailContactId`) REFERENCES `emailContacts` (`id`)
);





-- ************************************** `departmentSmsContacts`

CREATE TABLE `departmentSmsContacts`
(
 `departmentId` INT NOT NULL ,
 `smsContactId` INT NOT NULL ,

PRIMARY KEY (`departmentId`, `smsContactId`),
KEY `fkIdx_126` (`departmentId`),
CONSTRAINT `FK_126` FOREIGN KEY `fkIdx_126` (`departmentId`) REFERENCES `departments` (`id`),
KEY `fkIdx_130` (`smsContactId`),
CONSTRAINT `FK_130` FOREIGN KEY `fkIdx_130` (`smsContactId`) REFERENCES `smsContacts` (`id`)
);





-- ************************************** `usersSmsContacts`

CREATE TABLE `usersSmsContacts`
(
 `userId`       INT NOT NULL ,
 `smsContactId` INT NOT NULL ,

PRIMARY KEY (`userId`, `smsContactId`),
KEY `fkIdx_81` (`userId`),
CONSTRAINT `FK_81` FOREIGN KEY `fkIdx_81` (`userId`) REFERENCES `users` (`id`),
KEY `fkIdx_90` (`smsContactId`),
CONSTRAINT `FK_90` FOREIGN KEY `fkIdx_90` (`smsContactId`) REFERENCES `smsContacts` (`id`)
);





-- ************************************** `dispatches`

CREATE TABLE `dispatches`
(
 `id`        INT NOT NULL ,
 `dept`      INT NOT NULL ,
 `time`      DATETIME NOT NULL ,
 `audioFile` VARCHAR(45) NOT NULL ,
 `persist`   TINYINT(1) NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_38` (`dept`),
CONSTRAINT `FK_38` FOREIGN KEY `fkIdx_38` (`dept`) REFERENCES `departments` (`id`)
);

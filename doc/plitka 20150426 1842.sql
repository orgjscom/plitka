-- Скрипт сгенерирован Devart dbForge Studio for MySQL, Версия 3.10.227.1
-- Дата: 26.04.2015 18:42:50
-- Версия сервера: 5.5.25
-- Версия клиента: 4.1

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;

SET NAMES 'utf8';
--
-- Описание для plitka
--
DROP DATABASE IF EXISTS plitka;
CREATE DATABASE IF NOT EXISTS plitka
CHARACTER SET utf8
COLLATE utf8_general_ci;

USE plitka;

--
-- Описание для таблицы plitka.discounts
--
CREATE TABLE IF NOT EXISTS plitka.discounts(
  `назва акційного товару` VARCHAR (255),
  `ціна акційного товару` VARCHAR (255),
  `дата закінчення акції` DATE,
  `номер акції` VARCHAR (255)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы plitka.makers
--
CREATE TABLE IF NOT EXISTS plitka.makers(
  `країна виробника` VARCHAR (255),
  `адреса виробника` VARCHAR (255),
  `назва виробника` VARCHAR (255),
  `термін співпраці виробника з клієнтом` VARCHAR (255)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы plitka.orders
--
CREATE TABLE IF NOT EXISTS plitka.orders(
  `назва послуги` VARCHAR (255),
  `ціна послуги` INT (11),
  `відповідальна людина за надання послуги` VARCHAR (255)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы plitka.products
--
CREATE TABLE IF NOT EXISTS plitka.products(
  `назва виробу` VARCHAR (255),
  `вид виробу` VARCHAR (255),
  `вага виробу` VARCHAR (255),
  `розмір виробу` VARCHAR (255),
  `ціна виробу` INT (11),
  `кількість одиниць виробу` INT (11),
  `одиниця виміру виробу` VARCHAR (255),
  `виробник виробу` VARCHAR (255)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы plitka.users
--
CREATE TABLE IF NOT EXISTS plitka.users(
  `ПІБ клієнта` VARCHAR (255),
  `номер телефону клієнта` VARCHAR (255),
  `домашня адреса клієнта` VARCHAR (255),
  `замовлена послуга` VARCHAR (255),
  `термін співпраці клієнта з виробником` VARCHAR (255),
  `статус клієнта` VARCHAR (255),
  `номер заявки клієнта` VARCHAR (255),
  `замовлений товар` VARCHAR (255),
  `кількість одиниць замовленого товару` INT (11)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы plitka.workers
--
CREATE TABLE IF NOT EXISTS plitka.workers(
  `ПІБ працівника` VARCHAR (255),
  `номер посвідчення працівника` VARCHAR (255),
  `стаж роботи працівника` INT (11),
  `контактний номер телефону працівника` VARCHAR (255),
  `посада працівника` VARCHAR (255)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для пользователя ''@'localhost'
--
DROP USER '' @'localhost';
CREATE USER '' @'localhost';

--
-- Описание для пользователя 'root'@'127.0.0.1'
--
DROP USER 'root' @'127.0.0.1';
CREATE USER 'root' @'127.0.0.1';
GRANT USAGE ON *.* TO 'root' @'127.0.0.1' WITH GRANT OPTION;

--
-- Описание для пользователя 'root'@'::1'
--
DROP USER 'root' @'::1';
CREATE USER 'root' @'::1';
GRANT USAGE ON *.* TO 'root' @'::1' WITH GRANT OPTION;

--
-- Описание для пользователя 'root'@'localhost'
--
DROP USER 'root' @'localhost';
CREATE USER 'root' @'localhost';
GRANT USAGE ON *.* TO 'root' @'localhost' WITH GRANT OPTION;

-- 
-- Вывод данных для таблицы plitka.discounts
-- 
INSERT INTO plitka.discounts VALUES('тротуарна плитка старе місто tt33 25283', '35', '2015-12-04', '534354');
INSERT INTO plitka.discounts VALUES('цемент M350 462824', '30', '2015-11-23', '742724');
INSERT INTO plitka.discounts VALUES('відсів кристалічний h4er 3476435', '40', '2016-01-25', '245643');
INSERT INTO plitka.discounts VALUES('кирпіч o99 872332', '15', '2016-04-14', '853834');
INSERT INTO plitka.discounts VALUES('поддон 56er22 європейський 36742', '5', '2016-07-18', '325256');
INSERT INTO plitka.discounts VALUES('щебінь фракція 40-20  ai38 735729', '45', '2015-01-25', '687538');
INSERT INTO plitka.discounts VALUES('бордюр k223 984567', '25', '2015-08-23', '307719');


-- 
-- Вывод данных для таблицы plitka.makers
-- 
INSERT INTO plitka.makers VALUES('Україна', 'вул.Максимовича 62', 'Гніванський завод', '1 місяць');
INSERT INTO plitka.makers VALUES('Білорусія', 'вул.Бальбашівка 94', 'ТОВ Ковальська', '3 тижні');
INSERT INTO plitka.makers VALUES('Білорусія', 'вул.П.Печкіна 74', 'Keramikus', '7 днів');
INSERT INTO plitka.makers VALUES('Німеччина', 'вул.Баєр-Шмайлер 85', 'ABC-Klinker', '1 рік');
INSERT INTO plitka.makers VALUES('Німеччина', 'вул.Шальке-Смальке 15', 'Hagemeister', '2 тижні');
INSERT INTO plitka.makers VALUES('Польща', 'вул.Радянська 81', 'Celina', '2 місяці');
INSERT INTO plitka.makers VALUES('Румунія', 'вул.Циганська доля 38', 'Terca', '5 місяців');
INSERT INTO plitka.makers VALUES('Чехія', 'вул.Пражська пічка 73', 'Ruslan', '4 дні');


-- 
-- Вывод данных для таблицы plitka.orders
-- 
INSERT INTO plitka.orders VALUES('виготовлення тротуарної плитки на замовлення', 200, 'Кенюк Вікторія Володимирівна');
INSERT INTO plitka.orders VALUES('доставка тротуарної плитки', 250, 'Клим`юк Олександра Анатоліївна');
INSERT INTO plitka.orders VALUES('купівля цементу', 310, 'Мицканюк Василь Іванович');
INSERT INTO plitka.orders VALUES('замовлення відсіву', 420, 'Семотюк Михайло Миколайович');
INSERT INTO plitka.orders VALUES('доставка цементу', 150, 'Тесла Анна Григоріївна');
INSERT INTO plitka.orders VALUES('доставка піску', 300, 'Федченкова Валентина Тимофіївна');
INSERT INTO plitka.orders VALUES('озеленення території', 660, 'Шевченко Іван Миколайович');
INSERT INTO plitka.orders VALUES('купівля кирпіча', 300, 'Радченко Алла Миколаївна');
INSERT INTO plitka.orders VALUES('купівля поддонів', 120, 'Капленко Степан Олексійович');
INSERT INTO plitka.orders VALUES('доставка щебіню', 1200, 'Вусенко Сергій Денисович');
INSERT INTO plitka.orders VALUES('купівля бордюрів', 340, 'Заносенко Петро Анатолійович');


-- 
-- Вывод данных для таблицы plitka.products
-- 
INSERT INTO plitka.products VALUES('тротуарна плитка старе місто tt33 25283', 'вібропресований', '1,3т', '316x106x90', 80, 10000, 'м2', 'ABC-Klinker');
INSERT INTO plitka.products VALUES('лита тротуарна плитка 93sa22 315478', 'лита', '900кг', '216x106x80', 90, 12000, 'м2', 'Гніванський завод');
INSERT INTO plitka.products VALUES('цемент M350 462824', 'морозостійкий', '25кг', '40x40', 85, 1020, 'м2', 'ТОВ Ковальська');
INSERT INTO plitka.products VALUES('цемент M500 125524', 'водонепроникний', '25кг', '40x40', 65, 1100, 'м2', 'Celina');
INSERT INTO plitka.products VALUES('відсів кристалічний h4er 3476435', 'гранітний', '7т', '35x35x35', 75, 50, 'м3', 'ABC-Klinker');
INSERT INTO plitka.products VALUES('пісок річковий в мішках t77 425224', 'просіяний', '25кг', '30x30x30', 95, 1200, 'м3', 'Гніванський завод');
INSERT INTO plitka.products VALUES('газон r300 573346', 'зрізаний', '80кг', '100x100x10', 60, 800, 'м3', 'Terca');
INSERT INTO plitka.products VALUES('кирпіч o99 872332', 'вібропресований', '1,5кг', '40x20', 80, 1205, 'м2', 'Ruslan');
INSERT INTO plitka.products VALUES('поддон 56er22 європейський 36742', 'механічний', '30кг', '150x100', 95, 2645, 'м2', 'ТОВ Ковальська');
INSERT INTO plitka.products VALUES('щебінь фракція 40-20  ai38 735729', 'звичайний камінь', '9т', '40x20x10', 65, 40, 'м3', 'Hagemeister');
INSERT INTO plitka.products VALUES('щебінь мілкозернистий ai88 343626', 'бутовий камінь', '7т', '10x10x10', 65, 45, 'м3', 'Гніванський завод');
INSERT INTO plitka.products VALUES('бордюр k123 248557', 'вібропресований', '30кг', '300x50', 85, 5000, 'м', 'Keramikus');
INSERT INTO plitka.products VALUES('бордюр k223 984567', 'литий', '28кг', '100x20', 85, 5200, 'м', 'ABC-Klinker');


-- 
-- Вывод данных для таблицы plitka.users
-- 
INSERT INTO plitka.users VALUES('Білевич Ігор Дмитрович', '09688842465', 'Стахурського 54-12', 'виготовлення тротуарної плитки на замовлення', '1 місяць', 'новий клієнт', '252335', 'тротуарна плитка старе місто tt33 25283', 1);
INSERT INTO plitka.users VALUES('Григорів Марина Віталіївна', '09787542965', 'Театральна 222-52а', 'доставка тротуарної плитки', '3 тижні', 'постійний клієнт', '432936', 'лита тротуарна плитка 93sa22 315478', 4);
INSERT INTO plitka.users VALUES('Кенюк Вікторія Володимирівна', '09782992931', 'Хмельницьке шосе 63', 'купівля цементу', '7 днів', 'новий клієнт', '674268', 'цемент M350 462824', 2);
INSERT INTO plitka.users VALUES('Клим`юк Олександра Анатоліївна', '09628842440', 'Хрещатик 124-52в', 'замовлення відсіву', '1 рік', 'постійний клієнт', '679246', 'відсів кристалічний h4er 3476435', 1);
INSERT INTO plitka.users VALUES('Любачевська Роксолана Любомирівна', '09987542961', 'Болотова 21-22а', 'доставка цементу', '2 тижні', 'новий клієнт', '689252', 'цемент M500 125524', 2);
INSERT INTO plitka.users VALUES('Миколаєв Василь Петрович', '09987542961', 'Робітнича 21-22', 'доставка піску', '2 місяці', 'новий клієнт', '789612', 'пісок річковий в мішках t77 425224', 1);
INSERT INTO plitka.users VALUES('Семотюк Михайло Миколайович', '09487542905', 'Артоболевського 32-12а', 'озеленення території', '5 місяців', 'новий клієнт', '630256', 'газон r300 573346', 3);
INSERT INTO plitka.users VALUES('Стівен Гарпер Мартін', '02357657657', 'Payment str. 93-32b', 'купівля кирпіча', '4 дні', 'постійний клієнт', '750456', 'кирпіч o99 872332', 2);
INSERT INTO plitka.users VALUES('Фурик Таїсія Романівна', '09688842400', 'Чехова 514-12в', 'купівля поддонів', '3 місяці', 'новий клієнт', '630839', 'поддон 56er22 європейський 36742', 1);
INSERT INTO plitka.users VALUES('Мицканюк Василь Іванович', '09182599901', 'Хмельницьке шосе 312а', 'доставка щебіню', '1 тиждень', 'постійний клієнт', '875612', 'щебінь мілкозернистий ai88 343626', 4);
INSERT INTO plitka.users VALUES('Рижков Микита Кирилович', '09687542465', 'Шевченка 23-52', 'купівля бордюрів', '6 місяців', 'новий клієнт', '896214', 'бордюр k223 984567', 1);


-- 
-- Вывод данных для таблицы plitka.workers
-- 
INSERT INTO plitka.workers VALUES('Кенюк Вікторія Володимирівна', '6873459', 1, '09685802465', 'стажер');
INSERT INTO plitka.workers VALUES('Клим`юк Олександра Анатоліївна', '7054437', 4, '09887502925', 'продавець');
INSERT INTO plitka.workers VALUES('Мицканюк Василь Іванович', '6012452', 12, '09882991931', 'консультант');
INSERT INTO plitka.workers VALUES('Семотюк Михайло Миколайович', '8970352', 1, '09828841440', 'стажер');
INSERT INTO plitka.workers VALUES('Тесла Анна Григоріївна', '3710337', 7, '09987942261', 'продавець');
INSERT INTO plitka.workers VALUES('Федченкова Валентина Тимофіївна', '9787349', 13, '09687942962', 'продавець');
INSERT INTO plitka.workers VALUES('Шевченко Іван Миколайович', '4977949', 5, '09627542905', 'консультант');
INSERT INTO plitka.workers VALUES('Радченко Алла Миколаївна', '1013630', 1, '02327657657', 'стажер');
INSERT INTO plitka.workers VALUES('Капленко Степан Олексійович', '2773691', 3, '09688832400', 'продавець');
INSERT INTO plitka.workers VALUES('Вусенко Сергій Денисович', '1073430', 10, '09182539901', 'продавець');
INSERT INTO plitka.workers VALUES('Заносенко Петро Анатолійович', '2334539', 12, '09687532465', 'консультант');


/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;


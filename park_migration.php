<?php

require_once './db_connect.php';

$query = 'DROP TABLE IF EXISTS national_parks;';

$dbc->exec($query);

$query = <<<SQL
CREATE TABLE national_parks (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(64) NOT NULL,
	location VARCHAR(255) NOT NULL,
	date_established DATE NOT NULL,
	area_in_acres DOUBLE UNSIGNED NOT NULL,
	description TEXT,
	PRIMARY KEY (id)
);
SQL;

$dbc->exec($query);
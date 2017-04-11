<?php

require_once './db_connect.php';

$queries = [
	'DROP TABLE IF EXISTS national_parks;',
	'CREATE TABLE national_parks (
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(64) NOT NULL,
		location VARCHAR(255) NOT NULL,
		date_established DATE NOT NULL,
		area_in_acres DOUBLE UNSIGNED NOT NULL,
		PRIMARY KEY (id)
	);'
];

foreach ($queries as $query) {
	$dbc->exec($query);
}
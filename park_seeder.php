<?php

require_once './db_connect.php';

$queries = ['TRUNCATE TABLE national_parks;'];

$parks = [
	['name' => 'park0', 'location' => 'location0', 'date_established' => '1900-01-04', 'area_in_acres' => 64],
	['name' => 'park1', 'location' => 'location1', 'date_established' => '1921-02-07', 'area_in_acres' => 64],
	['name' => 'park2', 'location' => 'location2', 'date_established' => '1942-04-10', 'area_in_acres' => 64],
	['name' => 'park3', 'location' => 'location3', 'date_established' => '1963-05-13', 'area_in_acres' => 64],
	['name' => 'park4', 'location' => 'location4', 'date_established' => '1984-06-16', 'area_in_acres' => 64],
	['name' => 'park5', 'location' => 'location5', 'date_established' => '2005-07-19', 'area_in_acres' => 64],
	['name' => 'park6', 'location' => 'location6', 'date_established' => '2026-08-22', 'area_in_acres' => 64],
	['name' => 'park7', 'location' => 'location7', 'date_established' => '2047-09-25', 'area_in_acres' => 64],
	['name' => 'park8', 'location' => 'location8', 'date_established' => '2068-11-28', 'area_in_acres' => 64],
	['name' => 'park9', 'location' => 'location9', 'date_established' => '2089-12-31', 'area_in_acres' => 64],
];

foreach ($parks as $park) {
	$queries[] = 'INSERT INTO national_parks (name, location, date_established, area_in_acres)' . 
		"VALUES ('{$park['name']}', '{$park['location']}', '{$park['date_established']}', {$park['area_in_acres']});";
}

foreach ($queries as $query) {
	$dbc->exec($query);
}
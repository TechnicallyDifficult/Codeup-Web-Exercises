<?php

function pageController()
{
	$data = [];

	$data['adjs'] = ['blue', 'small', 'good', 'inconspicuous', 'fun', 'stupid', 'windy', 'simple', 'unpropitious', 'heavy', 'foregone', 'tentative', 'cosmic', 'infinite', 'misunderstood', 'practical', 'verbal'];

	$data['nouns'] = ['potato', 'block', 'tree', 'explosion', 'fish', 'cheese', 'noun', 'onomatopoeia', 'pickle', 'dragon', 'octagon', 'hangover', 'shirt', 'garbage', 'velocity', 'toilet paper', 'objection'];

	return $data;
}

function getRandomWord($array)
{
	$index = mt_rand(0, sizeof($array) - 1);
	return $array[$index];
}

function generateName($adjs, $nouns)
{
	return getRandomWord($adjs) .  '-' . getRandomWord($nouns);
}

extract(pageController());

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Server Name Generator</title>
		<style>
			body {
				font-family: sans-serif;
			}
		</style>
	</head>
	<body>
		<h1>
			<?= generateName($adjs, $nouns); ?>
		</h1>
	</body>
</html>
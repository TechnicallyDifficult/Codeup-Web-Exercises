<?php

function getRandomWord($array)
{
	$index = mt_rand(0, 9);
	return $array[$index];
}

function generateName()
{
	$adjs = ['blue', 'small', 'good', 'inconspicuous', 'fun', 'stupid', 'windy', 'simple', 'unpropitious', 'heavy'];

	$nouns = ['potato', 'block', 'tree', 'explosion', 'fish', 'cheese', 'noun', 'onomatopoeia', 'pickle', 'dragon'];
	return getRandomWord($adjs) .  '-' . getRandomWord($nouns);
}

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
			<?php echo generateName(); ?>
		</h1>
	</body>
</html>
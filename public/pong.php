<?php

require_once './functions.php';

function pageController()
{
	$data = [];
	$data['counter'] = (int) inputGet('c');
	return $data;
}

extract(pageController());

?>

<!DOCTYPE html>
<html>
<head>
	<title>Pong</title>
	<style type="text/css">
		a {
			text-decoration: none;
		}
		a:visited {
			color: #0000EE;
		}
		a:hover {
			text-decoration: underline;
		}
		a:active {
			color: #EE0000;
		}
		a:focus {
			outline: none;
		}
	</style>
</head>
<body>
	<h1>Pong</h1>
	<h3><?= escape($counter) ?></h3>
	<a href="./ping.php?c=<?= $counter + 1; ?>">HIT</a>
	<a href="./ping.php?c=0">MISS</a>
</body>
</html>
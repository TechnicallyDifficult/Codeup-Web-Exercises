<?php

function pageController()
{
	$data = [];
	$data['counter'] = isset($_GET['c']) ? $_GET['c'] : 0;
	return $data;
}

extract(pageController());

?>

<!DOCTYPE html>
<html>
<head>
	<title>Counter</title>
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
	<h1><?= $counter ?></h1>
	<form method="GET" action="/counter.php">
		<a href="./counter.php?c=<?= $counter + 1; ?>">Up</a>
		<a href="./counter.php?c=<?= $counter - 1; ?>">Down</a>
	</form>
</body>
</html>
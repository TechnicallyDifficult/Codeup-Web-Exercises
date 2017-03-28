<?php

session_start();

if (!isset($_SESSION['logged-in-user'])) header('Location: ./login.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>Authorized</title>
	<style type="text/css">
		body {
			font-family: sans-serif;
		}
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
	<main>
		<p>Authorized</p>
		<p><?= $_SESSION['logged-in-user']; ?></p>
		<a href="./logout.php">Logout</a>
	</main>
</body>
</html>
<?php

require_once '../Auth.php';

session_start();

Auth::logout();

header('Location: ./login.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>Logout</title>
</head>
<body></body>
</html>
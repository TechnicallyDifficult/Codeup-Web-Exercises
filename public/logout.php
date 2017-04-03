<?php

require_once '../Auth.php';
require_once '../Log.php';

session_start();

$log = new Log('login-attempts');

$log->info("User {$_SESSION['LOGGED_IN_USER']} logged out.");

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
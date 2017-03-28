<?php

session_start();

function clearSession()
{
    session_unset();
    session_regenerate_id(true);
}

clearSession();

header('Location: ./login.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>Logout</title>
</head>
<body></body>
</html>
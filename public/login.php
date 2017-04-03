<?php

require_once '../Input.php';
require_once '../Auth.php';
require_once '../Log.php';

function checkLogin()
{
	$username = Input::get('username');
	$password = Input::get('password');

	/*foreach ($logins as $login) {
		if ($username === $login['user'] and $password === $login['pass']) {
			$_SESSION['logged-in-user'] = $login['user'];
			return;
		}
	}*/

	if (Auth::attempt($username, $password)) {
		$log->info("User \"$username\" logged in.");
	} elseif ($username === Auth::$username) {
		$log->error("User \"$username\" attempted login with incorrect password.");
	} else {
		$log->error("Login attempt with unrecognized username: $username");
	}
}

function pageController()
{
	$data = [];

	/*$data['logins'] = [
		['user' => 'guest', 'pass' => 'password'],
		['user' => 'hide', 'pass' => 'seek']
	];*/

	if (!empty($_POST)) {
		$data['error'] = 'Login Failed';
	}

	$data['log'] = new Log('login-attempts');

	return $data;
}

session_start();

extract(pageController());

checkLogin();

if (Auth::check()) header('Location: ./authorized.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<style type="text/css">
		main {
			margin: 20px;
			padding: 20px;
			border: 1px solid #CCCCCC;
			border-radius: 5px;
		}

		p {
			padding-top: 25px;
			margin-bottom: 20px;
			position: relative;
		}

		h1 {
			margin-top: 5px;
			margin-bottom: 25px;
		}

		label {
			position: absolute;
			font-weight: normal;
			font-size: 14px;
			color: #999;
			top: 32px;
			left: 13px;
			transition-duration: 200ms;
			user-select: none;
			pointer-events: none;
		}

		input:focus + label, input:valid + label {
			font-weight: bold;
			font-size: 18px;
			color: black;
			top: 0px;
			left: 0px;
		}
	</style>
</head>
<body>
	<main>
		<h1>Log In</h1>
		<?php if (isset($error)) : ?>
			<div class="alert alert-danger alert-dismissable fade in">
				<button class="close" data-dismiss="alert" aria-label="close">&times;</button>
				<?= $error; ?>
			</div>
		<?php endif; ?>
		<form method="POST">
			<p>
				<input type="text" name="username" id="username" class="form-control" required oninvalid="this.setCustomValidity(' '); $(this).css('background-color', '#FFA09C');" oninput="this.setCustomValidity(''); $(this).css('background-color', 'white');">
				<label for="username">Username</label>
			</p>
			<p>
				<input type="password" id="password" name="password" class="form-control" required oninvalid="this.setCustomValidity(' '); $(this).css('background-color', '#FFA09C');" oninput="this.setCustomValidity(''); $(this).css('background-color', 'white');">
				<label for="password">Password</label>
			</p>
				<button type="submit" class="btn btn-success">Log In</button>
		</form>
	</main>
</body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</html>
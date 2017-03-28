<?php

function checkLogin($logins)
{
	$username = isset($_POST['username']) ? $_POST['username'] : NULL;
	$password = isset($_POST['password']) ? $_POST['password'] : NULL;

	foreach ($logins as $login) {
		if ($username === $login['user'] and $password === $login['pass']) {
			$_SESSION['logged-in-user'] = $login['user'];
			return;
		}
	}
}

function pageController()
{
	$data = [];

	$data['logins'] = [['user' => 'guest', 'pass' => 'password'], ['user' => 'hide', 'pass' => 'seek']];

	if (isset($_POST['username']) or isset($_POST['password'])) {
		$data['error'] = 'Login Failed';
	}

	return $data;
}

session_start();

extract(pageController());

checkLogin($logins);

if (isset($_SESSION['logged-in-user'])) header('Location: ./authorized.php');

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
			margin-bottom: 20px;
		}

		h1 {
			margin-top: 5px;
			margin-bottom: 25px;
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
				<label for="username">Username:</label>
				<input type="text" name="username" id="username" placeholder="Username" class="form-control">
			</p>
			<p>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="Password" class="form-control">
			</p>
				<button type="submit" class="btn btn-success">Log In</button>
		</form>
	</main>
</body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</html>
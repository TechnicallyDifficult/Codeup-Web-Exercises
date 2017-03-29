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
		@keyframes labelmove {
			from {font-size: 14px; color: #999; top: 32px; left: 13px;}
			to {font-size: 18px; color: #000; top: 0px; left: 0px;}
		}

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
			font-weight: normal;
			position: absolute;
			top: 32px;
			left: 13px;
			color: #999;
			animation: labelmove 200ms;
			animation-play-state: paused;
			animation-direction: alternate;
			animation-iteration-count: infinite;
			user-select: none;
			cursor: text;
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
				<label for="username">Username</label>
				<input type="text" name="username" id="username" class="form-control">
			</p>
			<p>
				<label for="password">Password</label>
				<input type="password" id="password" name="password" class="form-control">
			</p>
				<button type="submit" class="btn btn-success">Log In</button>
		</form>
	</main>
</body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			$('input').focusin(function() {
				$(this).parent().children('label').css('animation-play-state', 'running')
			}).focusout(function() {
				$(this).parent().children('label').css('animation-play-state', 'running')
			})

			$('label').on('animationiteration', function () {
				$(this).css('animation-play-state', 'paused');
			});
		});
	</script>
</html>
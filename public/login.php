<?php

function pageController()
{
	$data = [];
	$data['username'] = isset($_POST['username']) ? $_POST['username'] : NULL;
	$data['password'] = isset($_POST['password']) ? $_POST['password'] : NULL;
	return $data;
}

extract(pageController());

if ($username === 'guest' and $password === 'password') {
	header('Location: ./authorized.php');
} elseif ($username === '' or $password === '') {
	$error = 'Username and password fields cannot be blank';
} else {
	$error = 'Login Failed';
}

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
	</style>
</head>
<body>
	<main>
		<?php if (is_string($username) or is_string($password)) : ?>
			<div class="alert alert-danger alert-dismissable fade in">
				<button class="close" data-dismiss="alert" aria-label="close">&times;</button>
				<?= $error ?>
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
				<button type="submit" class="btn btn-success">Login</button>
		</form>
	</main>
</body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</html>
<?php

require_once 'Log.php';

class Auth {

	public static $username = 'guest';
	public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';

	public static function attempt($username, $password)
	{
		$log = new Log('login-attempts');
		if ($username === NULL or $password === NULL) {
			return;
		} elseif ($username === self::$username and password_verify($password, self::$password)) {
			$_SESSION['LOGGED_IN_USER'] = self::$username;
			$log->info("User \"$username\" logged in.");
		} elseif ($username === self::$username) {
			$log->error("User \"$username\" attempted login with incorrect password.");
		} else {
			$log->error("Login attempt with unrecognized username: $username");
		}
	}

	public static function check()
	{
		return (isset($_SESSION['LOGGED_IN_USER']) and $_SESSION['LOGGED_IN_USER'] === self::$username) ? true : false;
	}

	public static function user()
	{
		return self::$username;
	}

	public static function logout()
	{
		$log = new Log('login-attempts');
		session_unset();
		session_regenerate_id(true);
		$log->info("User {$_SESSION['LOGGED_IN_USER']} logged out.");
	}

}
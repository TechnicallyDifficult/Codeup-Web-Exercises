<?php

class Auth {

	public static $username = 'guest';
	public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';

	public static function attempt($username, $password)
	{
		if ($username === NULL or $password === NULL) {
			return;
		} elseif ($username === self::$username and password_verify($password, self::$password)) {
			$_SESSION['LOGGED_IN_USER'] = self::$username;
			return true;
		} else {
			return false;
		}
	}

	public static function check()
	{
		return (isset($_SESSION['LOGGED_IN_USER']) and $_SESSION['LOGGED_IN_USER'] === self::$username);
	}

	public static function user()
	{
		return self::$username;
	}

	public static function logout()
	{
		session_unset();
		session_regenerate_id(true);
	}

}
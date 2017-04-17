<?php

class Input
{
	public static function getString($key)
	{
		$value = self::get($key);

		if (is_null($value)) {
			throw new Exception("$key was null.");
		} elseif ((float) $value == $value) {
			throw new Exception("$key was not a string.");
		} else {
			return $value;
		}
	}

	public static function getNumber($key)
	{
		$value = self::get($key);

		if (is_null($value)) {
			throw new Exception("$key was null.");
		} elseif (!is_numeric($value)) {
			throw new Exception("$key was not a number.");
		} else {
			return (int) $value == (float) $value ? (int) $value : (float) $value;
		}
	}

	public function getDate($key)
	{
		$value = self::get($key);

		if (is_null($value)) {
			throw new Exception("$key was null.");
		} else {
			$d = DateTime::createFromFormat('Y-m-d', $value);
			if ($d === false) {
				throw new Exception("$key is not valid date.");
			} else {
				return $value;
			}
		}
	}

	/**
	 * Check if a given value was passed in the request
	 *
	 * @param string $key index to look for in request
	 * @return boolean whether value exists in $_POST or $_GET
	 */
	public static function has($key)
	{
		return isset($_REQUEST[$key]);
	}

	/**
	 * Get a requested value from either $_POST or $_GET
	 *
	 * @param string $key index to look for in index
	 * @param mixed $default default value to return if key not found
	 * @return mixed value passed in request
	 */
	public static function get($key, $default = NULL)
	{
		return isset($_REQUEST[$key]) ? $_REQUEST[$key] : $default;
	}

	public static function escape($input)
	{
		return htmlspecialchars(strip_tags($input));
	}

	///////////////////////////////////////////////////////////////////////////
	//                      DO NOT EDIT ANYTHING BELOW!!                     //
	// The Input class should not ever be instantiated, so we prevent the    //
	// constructor method from being called. We will be covering private     //
	// later in the curriculum.                                              //
	///////////////////////////////////////////////////////////////////////////
	private function __construct() {}
}

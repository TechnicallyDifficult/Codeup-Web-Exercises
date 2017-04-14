<?php

/**
 * A Class for interacting with the national_parks database table
 *
 * contains static methods for retrieving records from the database
 * contains an instance method for persisting a record to the database
 *
 * Usage Examples
 *
 * Retrieve a list of parks and display some values for each record
 *
 *      $parks = Park::all();
 *      foreach($parks as $park) {
 *          echo $park->id . PHP_EOL;
 *          echo $park->name . PHP_EOL;
 *          echo $park->description . PHP_EOL;
 *          echo $park->areaInAcres . PHP_EOL;
 *      }
 * 
 * Inserting a new record into the database
 *
 *      $park = new Park();
 *      $park->name = 'Acadia';
 *      $park->location = 'Maine';
 *      $park->areaInAcres = 48995.91;
 *      $park->dateEstablished = '1919-02-26';
 *
 *      $park->insert();
 *
 */
class Park {

	///////////////////////////////////
	// Static Methods and Properties //
	///////////////////////////////////

	/**
	 * our connection to the database
	 */
	public static $dbc = NULL;

	/**
	 * establish a database connection if we do not have one
	 */
	public static function dbConnect()
	{
		if (!is_null(self::$dbc)) {
			return;
		}
		self::$dbc = require 'db_connect.php';
	}

	/**
	 * returns the number of records in the database
	 */
	public static function count()
	{
		self::dbConnect();
		$query = 'SELECT * FROM national_parks;';
		return self::$dbc->query($query)->rowCount();
	}

	/**
	 * returns all the records
	 */
	public static function all()
	{
		self::dbConnect();
		$query = 'SELECT * FROM national_parks;';
		$parkTable = self::$dbc->query($query)->fetchAll(PDO::FETCH_ASSOC);
		$parks = [];
		foreach ($parkTable as $park) {
			$parks[$park['id']] = new Park($park);
		}
		return $parks;
	}

	/**
	 * returns $resultsPerPage number of results for the given page number
	 */
	public static function paginate($pageNo = 1, $resultsPerPage = 4)
	{
		self::dbConnect();
		$limit = $resultsPerPage;
		$offset = ($pageNo - 1) * 4;
		$query = "SELECT * FROM national_parks LIMIT $offset, $limit";
		$parkTable = self::$dbc->query($query)->fetchAll(PDO::FETCH_ASSOC);
		foreach ($parkTable as $park) {
			$parks[$park['id']] = new Park($park);
		}
		return $parks;
	}

	public static function guessType($value)
	{
		switch (gettype($value)) {
			case 'boolean':
				return PDO::PARAM_BOOL;
			case 'NULL':
				return PDO::PARAM_NULL;
			case 'integer':
				return PDO::PARAM_INT;
			case 'double':
			case 'string':
				return PDO::PARAM_STR;
		}
	}

	/////////////////////////////////////
	// Instance Methods and Properties //
	/////////////////////////////////////

	/**
	 * properties that represent columns from the database
	 */
	public $id;
	public $name;
	public $location;
	public $date_established;
	public $area_in_acres;
	public $description;

	public function __construct($park = NULL)
	{
		self::dbConnect();

		if (is_null($park)) return;

		$this->id = isset($park['id']) ? $park['id'] : NULL;
		$this->name = $park['name'];
		$this->location = $park['location'];
		$this->date_established = $park['date_established'];
		$this->area_in_acres = $park['area_in_acres'];
		$this->description = isset($park['description']) ? $park['description'] : NULL;
	}

	public function validateDate()
	{
		$d = DateTime::createFromFormat('Y-m-d', $this->date);
		return $d && $d->format('Y-m-d') === $this->date;
	}

	/**
	 * inserts a record into the database
	 */
	public function insert()
	{
		if (empty($this->description)) $this->description = NULL;

		$query = <<<SQL
		INSERT INTO national_parks(name, location, date_established, area_in_acres, description)
		VALUES (:name, :location, :date_established, :area_in_acres, :description);
SQL;

		$stmt = self::$dbc->prepare($query);

		$stmt->bindValue('name', $this->name, self::guessType($this->name));
		$stmt->bindValue('location', $this->location, self::guessType($this->location));
		$stmt->bindValue('date_established', $this->date_established, self::guessType($this->date_established));
		$stmt->bindValue('area_in_acres', $this->area_in_acres, self::guessType($this->area_in_acres));
		$stmt->bindValue('description', $this->description, self::guessType($this->description));
		$stmt->execute();
		$this->id = self::$dbc->lastInsertId();
	}
}

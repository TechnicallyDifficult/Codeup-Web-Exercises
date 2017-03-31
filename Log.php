<?php

class Log {

	public $filename;
	public $handle = NULL;

	public function __construct($prefix = 'log')
	{
		$this->filename = $prefix ./* date('Y-m-d') .*/ '.log';
		$this->handle = fopen($this->filename, 'a');
	}

	public function __destruct()
	{
		fclose($this->handle);
	}

	public function logMessage($logLevel = 'LOG', $message = 'log')
	{
		$success = fwrite($this->handle, PHP_EOL . date('Y-m-d G:i:s') . " [$logLevel] $message");
	}

	public function info($message = 'This is an info message.')
	{
		$this->logMessage('INFO', $message);
	}

	public function error($message = 'This is an error message.')
	{
		$this->logMessage('ERROR', $message);
	}
}
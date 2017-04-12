<?php

class Functions {

	public static function escape($input)
	{
		return htmlspecialchars(strip_tags($input));
	}

	public static function bindAll($values, $stmt, $exceptions = [])
	{
		foreach ($values as $key => $value) {
			$paramName = is_numeric($key) ? $key + 1 : ':' . $key;

			$type = isset($exceptions[$key]) ? $exceptions[$key] : gettype($value);

			switch ($type) {
				case 'boolean':
					$typeConst = PDO::PARAM_BOOL;
					break;
				case 'NULL':
					$typeConst = PDO::PARAM_NULL;
					break;
				case 'integer':
					$typeConst = PDO::PARAM_INT;
					break;
				case 'double':
				case 'string':
					$typeConst = PDO::PARAM_STR;
					break;
			}

			$stmt->bindValue($paramName, $value, $typeConst);
		}
	}

	public static function renderTable($array, $headers = [], $exceptions = [])
	{
		$html = '';

		if (!empty($headers)) {
			$html .= '<tr>';
			foreach ($headers as $header) {
				$html .= '<th>' . self::escape($header) . '</th>';
			}
			$html .= '</tr>';
		}

		foreach ($array as $items) {
			$html .= '<tr>';
			foreach ($items as $key => $item) {
				if (in_array($key, $exceptions, true)) continue;
				$html .= '<td>' . self::escape($item) . '</td>';
			}
			$html .= '</tr>';
		}

		return $html;
	}
}
<?php

require_once '../Input.php';

function pageController()
{
	require_once '../db_connect.php';

	$data = [];

	$data['pageno'] = Input::get('p', 1);

	$offset = ($data['pageno'] - 1) * 4;

	$limit = Input::get('l', 4);

	$data['parks'] = $dbc->query("SELECT * FROM national_parks LIMIT $limit OFFSET $offset")->fetchAll(PDO::FETCH_ASSOC);

	$rows = $dbc->query("SELECT * FROM national_parks;")->rowCount();

	$data['pages'] = $rows === 0 ? 1 : (int) ceil($rows / 4);

	return $data;
}

extract(pageController());

?>

<!DOCTYPE html>
<html>
<head>
	<title>All Parks</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<style type="text/css">

		main {
			margin: auto;
			width: 75%;
		}

		h1 {
			text-align: center;
		}

		#prev {
			float: left;
		}

		#next {
			float: right;
		}

	</style>
</head>
<body>
	<main>
		<table class="table table-bordered">
			<h1>National Parks</h1>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Location</th>
				<th>Date Established</th>
				<th>Area in Acres</th>
			</tr>
			<?php foreach ($parks as $park) : ?>
				<tr>
					<?php foreach ($park as $key => $attribute) : ?>
						<td>
							<?= $key === 'id' ?: $attribute; ?>
						</td>
					<?php endforeach; ?>
				</tr>
			<?php endforeach; ?>
		</table>
		<?php if ($pageno > 1): ?>
			<a href="./national_parks.php?p=<?= $pageno - 1 ?>" id="prev">&#60; Prev</a>
		<?php endif ?>
		<?php if ($pageno < $pages): ?>
			<a href="./national_parks.php?p=<?= $pageno + 1 ?>" id="next">Next &#62;</a>
		<?php endif ?>
	</main>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>
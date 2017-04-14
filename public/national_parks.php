<?php

require_once '../Input.php';
require_once '../Park.php';

function pageController()
{
	$data = [];

	$data['pageno'] = Input::get('p', 1);

	$data['parks'] = Park::paginate($data['pageno']);

	$rows = Park::count();

	$data['pages'] = $rows === 0 ? 1 : (int) ceil($rows / 4);

	return $data;
}

extract(pageController());

if (!empty($_POST)) {
	$parkValues = [
		'name' => Input::escape(Input::get('name')),
		'location' => Input::escape(Input::get('location')),
		'date_established' => Input::escape(Input::get('date_established')),
		'area_in_acres' => Input::escape(Input::get('area_in_acres')),
		'description' => Input::escape(Input::get('description'))
	];

	$newPark = new Park($parkValues);

	$newPark->insert();
}

?>

<!DOCTYPE html>
<html>
<head>
	<title>All Parks</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="./css/national_parks.css"></style>
</head>
<body>
	<main>
		<form action="./national_parks.php" method="POST">
			<table class="table table-bordered table-striped">
				<h1>National Parks</h1>
				<tr class="table-headers">
					<th class="table-header name">Name</th>
					<th class="table-header location">Location</th>
					<th class="table-header date_established">Date Established</th>
					<th class="table-header area_in_acres">Area in Acres</th>
					<th class="table-header description">Description</th>
				</tr>
					<?php foreach ($parks as $park): ?>
						<tr class="park">
							<td class="name text-collapse">
								<span class="content-text">
									<?php echo $park->name ?>
								</span>
							</td>
							<td class="location text-collapse">
								<span class="content-text">
									<?php echo $park->location ?>
								</span>
							</td>
							<td class="date_established text-collapse">
								<span class="content-text">
									<?php echo $park->date_established ?>
								</span>
							</td>
							<td class="area_in_acres text-collapse">
								<span class="content-text">
									<?php echo $park->area_in_acres ?>
								</span>
							</td>
							<td class="description text-collapse">
								<span class="content-text">
									<?php echo $park->description ?>
								</span>
							</td>
						</tr>
					<?php endforeach ?>
				<tr id="add-row">
					<td colspan="100%">
						<a id="add">Add</a>
					</td>
					<td class="hidden">
						<textarea class="add" rows="1" id="add-name" name="name" required></textarea>
					</td>
					<td class="hidden">
						<textarea class="add" rows="1" id="add-location" name="location" required></textarea>
					</td>
					<td class="hidden">
						<textarea class="add" rows="1" id="add-date" name="date_established" required></textarea>
					</td>
					<td class="hidden">
						<textarea class="add" rows="1" id="add-area" name="area_in_acres" required></textarea>
					</td>
					<td class="hidden">
						<textarea class="add" rows="1" id="add-description" name="description"></textarea>
					</td>
				</tr>
			</table>
			<div class="text-center">
				<button type="submit" class="hidden btn btn-primary" id="submit">Submit</button>
			</div>
		</form>
		<?php if ($pageno > 1): ?>
			<a href="./national_parks.php?p=<?= $pageno - 1 ?>" id="prev">&#60; Prev</a>
		<?php endif ?>
		<?php if ($pageno < $pages): ?>
			<a href="./national_parks.php?p=<?= $pageno + 1 ?>" id="next">Next &#62;</a>
		<?php endif ?>
	</main>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/3.0.20/autosize.min.js"></script>
	<script src="./js/national_parks.js"></script>
</body>
</html>
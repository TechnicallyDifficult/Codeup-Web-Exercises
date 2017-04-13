<?php

require_once '../Input.php';
require_once '../Functions.php';

function pageController()
{
	require_once '../db_connect.php';

	$data = [];

	$data['pageno'] = Input::get('p', 1);

	$offset = ($data['pageno'] - 1) * 4;

	$limit = Input::get('l', 4);

	$query = <<<SQL
	SELECT *
	FROM national_parks
	LIMIT ?, ?;
SQL;

	$stmt = $dbc->prepare($query);

	Functions::bindAll([$offset, $limit], $stmt);

	$stmt->execute();

	$data['parks'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

	$data['headers'] = ['name' => 'Name', 'location' => 'Location', 'date_established' => 'Date Established', 'area_in_acres' => 'Area in Acres', 'description' => 'Description'];

	Functions::bindAll([0, PHP_INT_MAX], $stmt);

	$stmt->execute();

	$rows = $stmt->rowCount();

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
			width: 90%;
		}

		a {
			cursor: pointer;
		}

		textarea:focus {
			outline: none;
		}

		.table-headers>th.table-header {
			vertical-align: middle;
		}

		.overflow, .expanded + span {
			display: none;
		}

		.expanded {
			display: initial;
		}

		.name {
			width: 15%;
		}

		.location {
			width: 20%;
		}

		.date_established {
			width: 6em;
		}

		.area_in_acres {
			width: 8em;
		}

		.add {
			height: 100%;
			width: 100%;
			background-color: transparent;
			border: none;
			resize: none;
			overflow: visible;
			padding: 8px;
		}

		#prev {
			float: left;
		}

		#next {
			float: right;
		}

		#add-row>td ~ td {
			padding: 0;
			overflow: auto;
		}
		
		h1, th, #add-row>td:first-child {
			text-align: center;
		}
	</style>
</head>
<body>
	<main>
		<table class="table table-bordered table-striped">
			<h1>National Parks</h1>
			<?= Functions::renderTable($parks, $headers, ['id']); ?>
			<tr id="add-row">
				<td colspan="100%">
					<a id="add">Add</a>
				</td>
				<td class="hidden">
					<textarea class="add" id="add-name"></textarea>
				</td>
				<td class="hidden">
					<textarea class="add" id="add-location"></textarea>
				</td>
				<td class="hidden">
					<textarea class="add" id="add-date"></textarea>
				</td>
				<td class="hidden">
					<textarea class="add" id="add-area"></textarea>
				</td>
				<td class="hidden">
					<textarea class="add" id="add-description"></textarea>
				</td>
			</tr>
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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/3.0.20/autosize.min.js"></script>
	<script>
		$(document).ready(function() {
			var limit = 80;
			$('.description').each(function(index, element) {
				if (element.innerText.length > limit) {
					element.innerHTML = element.innerHTML.substring(0, limit) + '<span class="overflow">' + element.innerHTML.substring(limit) + '</span><span>...</span>';
					$(element).css('cursor', 'pointer');
					$(element).click(function(event) {
						$(this).children('.overflow').toggleClass('expanded');
					});
				}
			});

			$('#add').click(function() {
				$('#add-row').children().toggleClass('hidden');
			});

			$('.add').keydown(function(e) {
				if (e.keyCode == 13) {
					e.preventDefault();
				}
			});

			autosize($('.add'));
		});
	</script>
</body>
</html>
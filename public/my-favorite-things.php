<?php 

$favoriteThings = ['video games', 'friends', 'imagination', 'art', 'music'];

?>

<!DOCTYPE html>
<html>
	<head>
		<title>My Favorite Things</title>
		<style>
			table {
				border: 1px solid black;
				border-collapse: collapse;
			}
		</style>
	</head>
	<body>
		<table>
			<?php foreach ($favoriteThings as $thing) : ?>
				<tr>
					<td>
						<?= $thing; ?>
					</td>
				</tr>
			<?php endforeach ?>
		</table>
	</body>
</html>
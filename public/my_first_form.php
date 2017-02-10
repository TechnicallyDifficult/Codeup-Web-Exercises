<?php
	var_dump($_GET);
	var_dump($_POST);
?>
***REMOVED***
***REMOVED***
	<head>
		<title>My First HTML Form</title>
	</head>
	<body>
		<header>
			<h1>Form Practice</h1>
		</header>
		<main>
			<h2>Please Log In</h2>
			<form method="POST" action="/my_first_form.php">
				<p>
					<label for="username">Username:</label>
					<input id="username" name="username" type="text" placeholder="ユーザー名" required>
				</p>
				<p>
					<label for="password">Password:</label>
					<input id="password" name="password" type="password" placeholder="パスワード" required>
				</p>
				<p>
					<button type="submit">Login</button>
				</p>
			</form>
			<hr>
			<h2>Email Us</h2>
			<form method="POST" action="/my_first_form.php">
				<p>
					<label for="to">To:</label>
					<input id="to" type="text" placeholder="Recipient's Address" required>
				</p>
				<p>
					<label for="from">From:</label>
					<input id="from" type="text" placeholder="Sender's Address" required>
				</p>
				<p>
					<label for="subject">Subject:</label>
					<input id="subject" type="text" placeholder="Enter Subject" required>
				</p>
				<p>
					<label for="email_body">Email Body:</label><br>
					<textarea id="email_body" rows="5" cols="40" placeholder="Enter Your Message Here" required></textarea>
					<br>
					<input type="checkbox" id="save_to_sent" name="save_to_sent" value="yes" checked>
					<label for="save_to_sent">Save a copy to your sent folder?</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
				<hr>
			</form>
			<h2>Multiple Choice Test</h2>
			<form method="POST" action="/my_first_form.php">
				<p>Is mayonnaise an instrument?</p>
				<p>
					<label>
						<input type="radio" name="q1" value="yes">
						Yes
					</label>
					<label>
						<input type="radio" name="q1" value="no">
						No
					</label>
				</p>
				<p>If a dog wore pants, would he wear them...</p>
				<p>
					<label>
						<input type="radio" name="q2" value="like_this">
						like this?
					</label>
					<label>
						<input type="radio" name="q2" value="or_like_this">
						or like this?
					</label>
				</p>
				<p>What kinds of pie are delicious?</p>
				<p>
					<label>
						<input type="checkbox" name="pie[]" value="apple">
						Apple
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" name="pie[]" value="cherry">
						Cherry
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" name="pie[]" value="pecan">
						Pecan
					</label>
				</p>
				<p>
					<button type="submit">Submit Answers</button>
				</p>
			</form>
		</main>
	</body>
***REMOVED***
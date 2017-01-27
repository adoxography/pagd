<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<label class="label">From</label>
		<p>{{ $from or "--" }}</p>
		<label class="label">Email</label>
		<p>{{ $email or "--" }}</p>
		<h4>Message:</h4>
		<p>{{ $body }}</p>
		<h4>Contact email:</h4>
	</body>
</html>
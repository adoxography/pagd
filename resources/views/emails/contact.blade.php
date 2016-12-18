<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<h4>Message:</h4>
		<p>{{ $body }}</p>
		<h4>Contact email:</h4>
		<p>{{ isset($from) ? $from : "None given" }}</p>
	</body>
</html>
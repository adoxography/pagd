@extends('layout')

@section('content')

<div class="heading">
	<h1 class="title">Welcome{{ Auth::user() ? ", " . Auth::user()->name : "" }}</h1>
</div>
<br />

<div class="box">

	<p>Welcome to the Pan-Algonquian Grammar Database.</p>
	<br/>
	<p>Some useful links:</p>
	<ul>
		<li>
			<a href="/languages">Browse the database</a>
		</li>
		<li>
			<a href="/search/#for-a-paradigm">Generate a paradigm</a>
		</li>
	</ul>

</div>

@stop
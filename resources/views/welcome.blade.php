@extends('layout')

@section('content')

<div class="heading">
	<h1 class="title">Welcome{{ Auth::user() ? ", " . Auth::user()->name : "" }}</h1>
</div>
<br />

<div class="box" id="root">
	<h4 class="title is-4">Changelog</h4>
	<ul style="list-style-type: circle; list-style-position: inside;">
		<li>
			21-01-17: <a href="/search#for-a-form">Pulled language selection out of line in form search and added negative and diminutive options</a>
		</li>		
		<li>
			21-01-17: <a href="/forms/10#basic-details">Merged form syntax details into basic details</a>
		</li>
		<li>
			21-01-17: <a href="/forms/10#notes">Added note fields (historical notes, allomorphy notes, usage notes, comments) to forms</a>
			<ul style="list-style-type: circle; list-style-position: inside; margin-left:2rem">
				<li>(The "Note" tab only appears on a form detail page when the form has at least some notes associated with it)</li>
			</ul>
		</li>
	</ul>
</div>

@stop
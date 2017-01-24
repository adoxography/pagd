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
			24-01-17: Added context-specific titles.
		</li>
		<li>
			24-01-17: Now using Laravel Mix for versioning - no need to press CTRL + F5 anymore.
		</li>
		<li>
			24-01-17: <a href="/morphemes/create">Styled morpheme creation form</a>
		</li>	
		<li>
			24-01-17: <a href="/forms/create">Styled form creation form</a>
		</li>		
		<li>
			24-01-17: Upgraded to Laravel 5.4!
		</li>			
		<li>
			22-01-17: <a href="/forms/1#basic-details">Added glosses to morphemes in form detail</a>
		</li>		
		<li>
			22-01-17: <a href="/forms/11">Altered form table such that morphemes are not required to exist prior to form existence</a>
		</li>		
		<li>
			22-01-17: Updated detail styling
		</li>			
		<li>
			22-01-17: Reformatted form details
		</li>			
		<li>
			21-01-17: <a href="/search#for-a-form">Pulled language selection out of line in form search and added negative and diminutive options</a>
		</li>		
		<li>
			21-01-17: Merged form syntax details into basic details
		</li>
		<li>
			21-01-17: Added note fields (historical notes, allomorphy notes, usage notes, comments) to forms
			<ul style="list-style-type: circle; list-style-position: inside; margin-left:2rem">
				<li>(The "Note" tab only appears on a form detail page when the form has at least some notes associated with it)</li>
			</ul>
		</li>
	</ul>
</div>

@stop
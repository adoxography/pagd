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
			26-01-17: The database now recognizes morphemes with hyphens, and requires a hyphen one or both ends for any new morphemes.
		</li>
		<li>
			26-01-17: Updated colour scheme to red and grey
		</li>
		<li>
			25-01-17: <a href="morphemes/4">Added full text description to gloss and slot on morpheme detail page</a>
		</li>
		<li>
			25-01-17: Styled morpheme detail title to follow OED standard for disambiguator
		</li>
		<li>
			25-01-17: Fixed bug where comment fields would not appear on edit
		</li>
		<li>
			25-01-17: Datalists now include whatever was typed as an option (if available as an option)
		</li>
		<li>
			25-01-17: Added parent fields to <a href="/forms/create">form</a> and <a href="/morphemes/create">morpheme</a> creation forms
		</li>
		<li>
			24-01-17: <a href="/languages/1#children">Moved + icon next to field label for forms that can be added to</a> (only viewable when logged in)
		</li>
		<li>
			24-01-17: Styled morpheme details to echo form details
		</li>
		<li>
			24-01-17: Added context-specific titles
		</li>
		<li>
			24-01-17: Now using Laravel Mix for versioning - no need to press CTRL + F5 anymore
		</li>
		<li>
			24-01-17: Styled morpheme creation form
		</li>	
		<li>
			24-01-17: Styled form creation form
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
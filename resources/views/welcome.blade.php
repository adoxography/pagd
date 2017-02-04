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
			03-02-17: Sources focus on the extra info field after being added
		</li>
		<li>
			03-02-17: Shrunk horizontal space between morphemes on form display
		</li>
		<li>
			03-02-17: Switched hyphen to em dash in argument labels
		</li>
		<li>
			03-02-17: Removed asterisk in front of proto-morphemes when displayed on proto-forms
		</li>
		<li>
			03-02-17: Added a colon after source short form
		</li>
		<li>
			03-02-17: Added sources to language display - lists all unique sources used for that language's forms and morphemes
		</li>
		<li>
			03-02-17: Added disambiguator to langauges' morpheme lists (WIP - will eventually only show disambiguator when morpheme needs disambiguation)
		</li>
		<li>
			03-02-17: Set datalists to close when the mouse is clicked outside of them
		</li>
		<li>
			03-02-17: Corrected typo on form creation form from "Erg" to "Obj"
		</li>
		<li>
			03-02-17: Hid parent from language display when none is entered
		</li>
		<hr>
		<li>
			02-02-17: Removed "from" and "to" information from log due to too many errors; this information is still available in a model's details
		</li>
		<li>
			02-02-17: Fixed bugs re: morpheme disambiguators
		</li>
		<li>
			02-02-17: Allowed longer gloss names (increased from 8 characters to 15)
		</li>
		<li>
			02-02-17: Added URL and Notes fields to sources
		</li>
		<li>
			02-02-17: Changed the default group to "Central" in language creation
		</li>
		<li>
			02-02-17: Switched sources from ordered list to unordered list on form, morpheme display
		</li>
		<li>
			02-02-17: Added edit icon to the top of model cards
		</li>
		<li>
			02-02-17: Updated log field names to be more readable
		</li>
		<li>
			02-02-17: Added quotation marks to log
		</li>
		<li>
			02-02-17: Added log tab to language, form, morpheme display
		</li>
		<li>
			02-02-17: Fixed bugs in form validation
		</li>
		<hr>
		<li>
			01-02-17: Cognates are live for <a href="/forms/14#cognates">forms</a> and <a href="/morphemes/4#cognates">morphemes</a>
		</li>
		<li>
			01-02-17: Added ability to remove parents (previously, leaving the field blank on edit would do nothing to the parent)
		</li>
		<li>
			01-02-17: Added <a href="/log">log</a> functionality
		</li>
		<li>
			01-02-17: Added <a href="/register">user registration</a>; temporary verification code is "Verified"
		</li>
		<hr>
		<li>
			31-01-17: Modified form and morpheme models such that they always appear as *_ when they belong to a reconstructed language
		</li>
		<li>
			31-01-17: <a href="/languages/create">Updated language table and form</a>
		</li>
		<li>
			31-01-17: <a href="http://algling.dev/glosses/4#found-in">Glosses now display the morphemes that use them</a>
		</li>
		<li>
			31-01-17: Allowed one character algonquianist codes
		</li>
		<li>
			31-01-17: Use unique name for forms, morphemes in parent fields of <a href="/forms/create">form</a> and <a href="/morphemes/create">morpheme</a> creation; <a href="/languages/1#forms">form listing</a>, <a href="/languages/1#morphemes">morpheme listing</a> of language details; <a href="/forms/1">parent field</a> of form details; <a href="/morphemes/4">parent field</a>, <a href="/morphemes/4#forms">form listing</a> of morpheme details
		</li>
		<li>
			31-01-17: Implemented database backup system: database will backup after every five save events (create and edit both count as save events)
		</li>
		<li>
			31-01-17: Updated "name" field to "morpheme" in morpheme form
		</li>
		<li>
			31-01-17: Fixed source populating with old data
		</li>
		<li>
			31-01-17: Set glosses in form detail view to small caps
		</li>
		<li>
			31-01-17: De-italicized form titles in detail view
		</li>
		<li>
			31-01-17: <a href="/search#for-a-paradigm">Added language suggestions to paradigm search</a>
		</li>
		<li>
			31-01-17: Fixed bug in morpheme comments appearing on edit
		</li>
		<hr>
		<li>
			29-01-17: Formatted glosses as small caps
		</li>
		<li>
			29-01-17: Added functionality for viewing and editing glosses
		</li>
		<li>
			29-01-17: Disabled individual mode selection in paradigm search where appropriate
		</li>
		<li>
			29-01-17: Updated paradigm search look and functionality
		</li>
		<li>
			29-01-17: <a href="/morphemes/create">Added on-the-fly glosses to morpheme creation</a>
		</li>
		<li>
			29-01-17: <a href="/forms/create">Re-added negative, diminutive, absolute to form creation form</a>
		</li>
		<hr>
		<li>
			28-01-17: Updated mail driver to Laravel 5.4 standard
		</li>
		<li>
			28-01-17: <a href="/forms/14">Added 'view paradigm' link to form detail</a>
		</li>
		<li>
			28-01-17: Styled <a href='/search/paradigm?languages%5B%5D=3&languages%5B%5D=4&languages%5B%5D=2&languages%5B%5D=1&classes%5B%5D=1&classes%5B%5D=2&classes%5B%5D=3&classes%5B%5D=4&orders%5B%5D=1&orders%5B%5D=2&orders%5B%5D=3&includeNegative=true&includeDiminutive=true&modeSelect=allModes'>paradigm search results</a>
		</li>
		<li>
			28-01-17: Added ability to <a href="/sources">view</a> and <a href="/sources/1/edit">edit</a> sources in the event of errors
		</li>
		<hr>
		<li>
			27-01-17: Source selection is now retained even after form validation failure
		</li>
		<li>
			27-01-17: Morphemes now display page numbers
		</li>
		<li>
			27-01-17: Fixed bug in morpheme sources
		</li>
		<li>
			27-01-17: Morphemes can now have sources
		</li>
		<li>
			27-01-17: Delete buttons now fire confirmation dialogs before deleting
		</li>
		<li>
			27-01-17: Added new source component into form and morpheme creation forms
		</li>
		<li>
			27-01-17: Fixed bug in recognizing hypens at the end of morphemes
		</li>
		<hr>
		<li>
			26-01-17: The database now recognizes morphemes with hyphens, and requires a hyphen one or both ends for any new morphemes.
		</li>
		<li>
			26-01-17: Updated colour scheme to red and grey
		</li>
		<hr>
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
			25-01-17: Added parent fields to form and morpheme creation forms
		</li>
		<hr>
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
		<hr>		
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
		<hr>		
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
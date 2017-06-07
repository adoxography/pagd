@extends('layout', ['title' => 'Changelog'])

@section('title')
	Changelog
@endsection

@section('content')
	<ul class="indented-list">
		<li>
			07-06-17: Added auto-generated colours to datapoints
		</li>
		<li>
			07-06-17: Fixed bug preventing examples from saving phonemic representations
		</li>
		<hr>
		<li>
			05-06-17: Added sources below paradigms
		</li>
		<li>
			05-06-17: Fixes to datapoint notes
		</li>
		<li>
			05-06-17: Reformatted the <a href="/log">activity log</a>
		</li>
		<hr>
		<li>
			02-06-17: Modified the datapoints
		</li>
		<hr>
		<li>
			01-06-17: Fixed bug in non-stemless forms
		</li>
		<hr>
		<li>
			28-05-17: Added identifying information to nominal forms and examples
		</li>
		<li>
			28-05-17: Forms without a stem now automatically generate an example
		</li>
		<li>
			28-05-17: Merged V and N slots into STM (Stem)
		</li>
		<hr>
		<li>
			25-05-17: Removed nominal modes
		</li>
		<hr>
		<li>
			24-05-17: Added nominals
			<ul>
				<li>Nominal forms have their own entry form</li>
				<li>Nominal examples are entered using the existing example form</li>
			</ul>
		</li>
		<hr>
		<li>
			17-05-17: Made filter case-insensitive, and ignore parentheses in results
			<ul>
				<li>
					"yani" will return results for both "(y)ani" and "yani," but "(y)ani" will only return "(y)ani"
				</li>
			</ul>
		</li>
		<li>
			17-05-17: Moved children onto the basic details of the language page
		</li>
		<li>
			17-05-17: Changed "Structural survey" to "Datapoints" on language detail and displayed datapoint count
		</li>
		<hr>
		<li>
			11-05-17: Removed the spacing in front of the colon on sources
		</li>
		<li>
			11-05-17: Included extra identifying information on cognates tab
		</li>
		<li>
			11-05-17: Added filters for form and morpheme pages
		</li>
		<li>
			11-05-17: Converted remaining AJAX forms to syncronous forms
		</li>
		<li>
			11-05-17: Restyled the website
		</li>
		<hr>
		<li>
			04-05-17: Added escape sequence for # (just type ##)
		</li>
		<hr>
		<li>
			29-04-17: Added link to add missing glosses when logged in
		</li>
		<li>
			29-04-17: Added "Unmarked" to the list of modes
			<ul>
				<li>
					will only appear as a column label in a paradigm if it contrasts with another mode
				</li>
				<li>
					paired with "indicative" when searching
				</li>
			</ul>
		</li>
		<hr>
		<li>
			28-04-17: Added the ability to add miscellaneous pages
		</li>
		<hr>
		<li>
			24-04-17: Recoded form form to submit without AJAX
			<ul>
				<li>This form is long and complicated, so there's a good chance bugs will show up. Please report ASAP.</li>
			</ul>
		</li>
		<li>
			24-04-17: Made ISO nullable
		</li>
		<li>
			24-04-17: Recoded language form to submit without AJAX
			<ul>
				<li>This should eliminate most remaining submission errors</li>
				<li>Will transition other forms to follow a similar structure</li>
			</li>
		</li>
		<li>
			21-04-17: Prevented paradigms and detail pages from appearing before JS finishes loading
		</li>
		<li>
			20-04-17: Added structural survey
		</li>
		<hr>
		<li>
			18-04-17: Added source deletion routine
		</li>
		<hr>
		<li>
			17-04-17: Made all JS forms autofocus first text input
		</li>
		<li>
			17-04-17: Added a filter option to the <a href="/sources">source page</a>
		</li>
		<hr>
		<li>
			15-04-17: Reformatted the <a href="/need-attention">need attention</a> page
		</li>
		<li>
			15-04-17: Reformatted the <a href="/sources">source index</a>
		</li>
		<hr>
		<li>
			14-04-17: Modified paradigm tab
		</li>
		<li>
			14-04-17: Modified the "tag input" component (i.e. the one used for glosses):
			<ul>
				<li>
					Made the tags draggable to enable ordering
				</li>
				<li>
					Coloured the tags
				</li>
				<li>
					Added a container for the tags to distinguish the component from a regular text input
				</li>
				<li>
					Made the tags bigger to improve legibility
				</li>
			</ul>
		</li>
		<li>
			14-04-17: Added <a href="/slots/create">slot creation</a>
		</li>
		<hr>
		<li>
			13-04-17: Fixed ordering of languages in form search
		</li>
		<li>
			13-04-17: Fixed nonexistent form error
		</li>
		<hr>
		<li>
			12-04-17: Added paradigm tab to languages
		</li>
		<hr>
		<li>
			10-04-17: Add "add another" to the <a href="/glosses/">gloss index</a> page
		</li>
		<hr>
		<li>
			08-04-17: Added header merging in paradigms
		</li>
		<li>
			08-04-17: Fixed bug in paradigm search
		</li>
		<hr>
		<li>
			08-04-17: Restructured how glosses work (<a href='/guide#glosses'>guide</a>)
		</li>
		<li>
			08-04-17: Implemented source lookup with TNTSearch; typing "algonquin" will now return results for "Algonquian"
		</li>
		<li>
			08-04-17: Improved search
		</li>
		<li>
			08-04-17: Fixed an issue with some text fields resetting the carat to the beginning after each character
		</li>
		<li>
			08-04-17: Incorporated paradigm search results into layout
		</li>
		<hr>
		<li>
			07-04-17: Added non-diminutive option to advanced paradigm search
		</li>
		<li>
			07-04-17: Updated labels in searches
		</li>
		<li>
			07-04-17: Refined model shortcuts
		</li>
		<li>
			07-04-17: Added <a href="/guide#shortcuts">model shortcuts</a> (<a href="/languages/15">Demo</a>)
		</li>
		<hr>
		<li>
			06-04-17: Implemented <a href="/search#for-a-form">search by form</a>
			<ul>
				<li>
					(Search refinement still to come)
				</li>
			</ul>
		</li>
		<li>
			06-04-17: Added a <a href="/guide">guide for contributors</a> on some of the non-obvious features of the database
		</li>
		<li>
			06-04-17: Updated styling
		</li>
		<hr>
		<li>
			05-04-17: Made examples field on form detail always appear when logged in, even if there are no examples
		</li>
		<li>
			05-04-17: Shrunk title size
		</li>
		<li>
			05-04-17: Repeated example above the morphemes
		</li>
		<li>
			05-04-17: Truncated long source forms in dropdowns
		</li>
		<hr>
		<li>
			04-04-17: Added form summary on example display
		</li>
		<li>
			04-04-17: Added examples tab to the needs attention page
		</li>
		<li>
			04-04-17: Changed the name of the website from PAGD to DALS
		</li>
		<li>
			04-04-17: Updated the layout of the source input within other forms
		</li>
		<li>
			04-04-17: Sources are now looked up using their long form
		</li>
		<li>
			04-04-17: Split "short" field of sources into author, year, and disambiguator
			<ul>
				<li>
					Disambiguator is a letter and is added automatically and only if necessary
				</li>
			</ul>
		<li>
			04-04-17: Replaced Algolia with TNTSearch - less powerful, but open source
		</li>
		<li>
			04-04-17: Login actions now redirect to the previous page instead of the home page
		</li>
		<hr>
		<li>
			29-03-17: Added visibility toggle
			<ul>
				<li>Available for languages and all components of languages (e.g. morphemes, forms, etc.)</li>
				<li>Toggling the visibility (the eye icon on the display page) will hide that piece of data from the public</li>
				<li>Hiding a language will hide all of that language's data</li>
			</ul>
		</li>
		<li>
			29-03-17: Added "soft deletes" to tables
			<ul>
				<li>Rather than being erased from the database, deleting an item will mark it as having been deleted</li>
				<li>This allows deletion of data to be registered in the log</li>
				<li>It's also easier to restore accidentally deleted data</li>
			</ul>
		</li>
		<li>
			29-03-17: Added user roles
			<ul>
				<li>
					Administrators, contributors: can add, edit, and delete
				</li>
				<li>
					Users: read-only access
				</li>
				<li>
					Eventually, may add ability for administrators to "hard delete," as opposed to "soft deletes" (see above)
				</li>
			</ul>
		</li>
		<hr>
		<li>
			24-03-17: Fixed language morpheme component
		</li>
		<li>
			24-03-17: Updated styling
		</li>
		<li>
			24-03-17: Updated the welcome page
		</li>
		<li>
			24-03-17: Moved examples onto basic details tab of forms
		</li>
		<li>
			24-03-17: Prevented duplicate sources from being stored for a single item
		</li>
		<li>
			24-03-17: Fixed comments disappearing in morpheme form
		</li>
		<hr>
		<li>
			23-03-17: Stopped tracking id and updated_at time in the log
		</li>
		<li>
			23-03-17: Modified formatting of participles so — and + are not underlined
		</li>
		<li>
			23-03-17: Moved changelog off of the welcome page
		</li>
		<li>
			23-03-17: Fixed morpheme disambiguation
		</li>
		<li>
			23-03-17: Fixed form validation
		</li>
		<hr>
		<li>
			22-03-17: Added capability of entering and displaying participles
		</li>
		<li>
			22-03-17: Reordered orders as independent - conjunct - imperative
		</li>
		<li>
			22-03-17: Removed markdown; rules are now triggered by #[abv]
		</li>
		<hr>
		<li>
			21-03-17: Hyperlinked sources in displays
		</li>
		<li>
			21-03-17: Added bookmarking system
			<ul>
				<li>
					When logged in, click on the bookmark icon in the top right of any model display to bookmark it. You will be prompted for an optional comment.
				</li>
				<li>
					When you have already bookmarked a model, the icon will be filled in. Click it to remove it from your bookmarks.
				</li>
			</ul>
		</li>
		<li>
			21-03-17: Fixed absolute/objective input issue
		</li>
		<hr>
		<li>
			20-03-17: Added <a href="/sources/create">source creation</a> outside of other creations
		</li>
		<hr>
		<li>
			19-03-17: Added <a href="/search#for-a-paradigm">basic paradigm search</a>
		</li>
		<li>
			19-03-17: Added a route that will bring up the <a href="/entire-paradigm">entire database</a>
		</li>
		<hr>
		<li>
			18-03-17: Added search refinement from paradigm views
		</li>
		<li>
			18-03-17: Enabled searching by TA subclass
		</li>
		<li>
			18-03-17: Reformatted the <a href="/search#for-a-paradigm">paradigm search</a>
		</li>
		<hr>
		<li>
			17-03-17: Added <a href="/search">Algolia search</a>
		</li>
		<li>
			17-03-17: Added colours to slots
		</li>
		<li>
			17-03-17: Began transition to WYSIWYG editor
		</li>
		<hr>
		<li>
			09-03-17: Made all texboxes auto-expand
		</li>
		<hr>
		<li>
			08-03-17: Added empty forms
			<ul>
				<li>
					Indicate that a given form does not exist within a language
				</li>
				<li>
					Added the same way as forms - just indicate that the form does not exist
				</li>
			</ul>
		<hr>
		<li>
			07-03-17: Added <a href="/changes">revised initial change</a> schema
			<ul>
				<li>
					Demos: <a href="/forms/403">form with changed vStem</a>, <a href="/forms/404">form with changed preverb</a>
				</li>
				<li>
					Initial change can be added using the syntax "IC(.[initial change disambiguator])|[morpheme](.[morpheme disambiguator])"
				</li>
				<li>
					Like morpheme disambiguators, the initial change disambiguator is not required unless the morpheme has more than one kind of initial change
				</li>
				<li>
					Initial change does not have to be recorded in order for it to be used; if no records are found, the morpheme will be displayed as "IC.[morpheme]"
				</li>
			</ul>
		</li>
		<li>
			07-03-17: Fixed ordering of all other header elements in paradigms
		</li>
		<li>
			07-03-17: Now displaying languages by group in the <a href="/languages">index page</a>
		</li>
		<li>
			07-03-17: Added <a href="/languages/order">ordering for languages and groups</a>
			<ul>
				<li>
					Governs ordering of languages in paradigms and lists
				</li>
				<li>
					By default, new languages will appear first in their group
				</li>
				<li>
					A reminder to order the language has been added to the success message
				</li>
			</ul>
		</li>
		<hr>
		<li>
			06-03-17: Added <a href="/rules/1">rules</a>
			<ul>
				<li>
					Can be added using the <a href="/rules/create">creation form</a> (located in the add menu)
				</li>
				<li>
					Namespaced within languages; multiple languages can each have their own rule with the same name and abbreviation
				</li>
				<li>
					Can be added to any textarea field by typing $ followed by the rule abbreviation
				</li>
				<li>
					Rules do not have to exist before being used. (It will work just as well to include the abbreviation in a textarea field and then define it later)
				</li>
			</ul>
		</li>
		<li>
			06-03-17: Allowed ISO to be used in URLs
			<ul>
				<li><a href="/languages/1">http://www.algling.net/languages/1</a> still works, but now so does <a href="/languages/alg">http://www.algling.net/languages/alg</a></li>
				<li>Will implement similar functionality for forms, morphemes, and examples in the future</li>
			</ul>
		</li>
		<hr>
		<li>
			02-03-17: Fixed bug in disambiguation
		</li>
		<hr>
		<li>
			26-02-17: Reduced paradigm table column width to fit table
		</li>
		<li>
			26-02-17: Added ability to toggle morphology on paradigm search
		</li>
		<li>
			26-02-17: Added functionality for viewing and manipulating slots
		<hr>
		<li>
			21-02-17: Fixed examples not displaying properly in the log
		</li>
		<li>
			21-02-17: Enabled <a href="http://miaolz123.github.io/vue-markdown/#fn3">Markdown syntax</a> in all text fields (<a href="/languages/15">Demo</a>)
		</li>
		<li>
			21-02-17: Fixed bug blocking the enter key from working on the form, morpheme, and example forms
		</li>
		<li>
			21-02-17: Added → and > to cognates tab
		</li>
		<li>
			21-02-17: Added a "show morphology" option to paradigm search
		</li>
		<li>
			21-02-17: <a href="/search/paradigm?classes%5B2%5D=3&orders%5B%5D=1&orders%5B%5D=3&modeSelect=indicativeOnly&affirmative=true&languages%5B%5D=Proto-Algonquian&languages%5B%5D_id=1">Enabled display of syncretism for non-final arguments</a>
		</li>
		<li>
			21-02-17: Set paradigm search to open a new window/tab on submit
		</li>
		<li>
			21-02-17: Integrated new paradigm search results into paradigm search
		</li>
		<li>
			21-02-17: Added negative, diminutive, and abs/obv into new paradigm search results
		</li>
		<hr>
		<li>
			17-02-17: Added a patch for the network errors, but unable to test due to the randomness of the error
			<ul>
				<li>The patch *should* have prevented the "perma-loading" error, and instead a dialog should notify the user of a network error</li>
			</ul>
		</li>
		<li>
			17-02-17: Added a tooltip-like component to example and form morphemes
			<ul>
				<li><a href="/forms/70">When disambiguation is required, clicking on the morpheme will automatically apply it to the form</a></li>
				<li><a href="/forms/218">When the morpheme is missing, the link will take you to the morpheme creation page with as many details as possible already filled in</a></li>
				<ul>
					<li>You will need to add in your own hyphen to the morpheme, as there's no way for the site to know which side(s) to put it on</li>
				</ul>
			</ul>
		</li>
		<hr>
		<li>
			16-02-17: Fixed the bug in morpheme creation where the parent field called forms instead of morphemes
		</li>
		<li>
			16-02-17: Enabled the X button on flash notifications
		</li>
		<li>
			16-02-17: Added IC to gloss of initial changed morphemes
		</li>
		<li>
			16-02-17: Added asterisk to phonemic representations of reconstructed languages
		</li>
		<li>
			16-02-17: Fixed typo in language link on example display
		</li>
		<hr>
		<li>
			14-02-17: Fixed bug in forms not disappearing from the "needs attention" list after morpheme edit
		</li>
		<li>
			14-02-17: Fully implemented examples
			<ul>
				<li>Validation</li>
				<li>Creation</li>
				<li>Display</li>
				<li>Modification</li>
				<li>Deletion</li>
			</ul>
		</li>
		<hr>
		<li>
			13-02-17: Added example creation form (no back end functionality yet)
		</li>
		<hr>
		<li>
			12-02-17: Added red border to fields that have errors
		</li>
		<li>
			12-02-17: Rewrote most of the forms as Vue.js components for more cohesive functionality and cleaner code
			<ul>
				<li>Forms are submitted and validated via AJAX requests</li>
				<li>Validation errors appear below the field that had the error</li>
				<li>Will aid in Example form development</li>
				<li><span style="color: #FF0000;">May have caused unintended bugs; please report all unexpected behaviour</span></li>
			</ul>
		</li>
		<hr>
		<li>
			08-02-17: Added translation ability to morphemes
		</li>
		<hr>
		<li>
			07-02-17: Added change type to morphemes
		</li>
		<li>
			07-02-17: Added change type to forms
		</li>
		<li>
			07-02-17: Removed the asterisk from phonemic representation of forms
		</li>
		<li>
			07-02-17: Added initial change functionality
		</li>
		<hr>
		<li>
			06-02-17: <a href="/sandbox/paradigm">Updated demo paradigm view to handle all non-negative, non-diminutive, and non-abs/obj forms</a>
		</li>
		<li>
			06-02-17: Added demo of a paradigm view of all intransitive and non-negative, non-diminutive, and non-abs/obj forms
		</li>
		<hr>
		<li>
			05-02-17: Added functionality to make a <a href="/forms/need-attention">"forms that need attention"</a> page possible
		</li>
		<li>
			05-02-17: Removed gloss from morpheme cognates (If it really is a big deal, I can re-add it, but it's kind of a pain)
		</li>
		<li>
			05-02-17: <a href="/languages/1#morphemes">Added a component to language displays for viewing morphemes</a>
		</li>
		<li>
			05-02-17: Sources now appear in alphabetical order
		</li>
		<li>
			05-02-17: Fixed error in morpheme, form display
		</li>
		<hr>
		<li>
			03-02-17: Limited the main log to just show the last 30 changes
		</li>
		<li>
			03-02-17: Updated cognate display so as to exclude PA forms/morphemes from being cognates
		</li>
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
			<ul>
				<li>(The "Note" tab only appears on a form detail page when the form has at least some notes associated with it)</li>
			</ul>
		</li>
	</ul>
@endsection
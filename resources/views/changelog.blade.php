@extends('layout', ['title' => 'Changelog'])

@section('title')
	Changelog
@endsection

@section('content')
	<ul class="indented-list">
		<li>
			31-10-17: Added subscripts for rules
		</li>
		<li>
			31-10-17: Made superfluous PA parent/child links delete when reflexes are deleted
		</li>
		<li>
			30-10-17: Added 0, 0s, 0d, and 0p to possible pronominal features
		</li>
		<hr>
		<li>
			27-10-17: Fixed validation in nominal form
		</li>
		<hr>
		<li>
			26-10-17: Fixed broken links in languages' nominals page
		</li>
		<hr>
		<li>
			24-10-17: Added phoneme search
		</li>
		<hr>
		<li>
			23-10-17: Updated presentation of null phoneme
		</li>
		<hr>
		<li>
			22-10-17: Added ability to mark a phoneme has having been deleted, instead of having a reflex
		</li>
		<hr>
		<li>
			21-10-17: Fixed issue with morpheme input not appearing
		</li>
		<li>
			21-10-17: Fixed broken nominal paradigm links
		</li>
		<li>
			21-10-17: Added "affirmative" and "non-affirmative" to modes
		</li>
		<li>
			21-10-17: Added "lexicon" to variable types
		</li>
		<hr>
		<li>
			18-10-17: Added typewriter to cluster input
		</li>
		<li>
			18-10-17: Fixed sorting of obviative nominal forms
		</li>
		<li>
			18-10-17: Updated ordering of cluster tables
		</li>
		<li>
			18-10-17: Changed the name of the clusters table to 'Primary clusters,' except for PA
		</li>
		<li>
			18-10-17: Fixed bookmarking for phonology module
		</li>
		<li>
			18-10-17: Fixed bug in nominals with parents
		</li>
		<hr>
		<li>
			14-10-17: Fixed bug where reflexes wouldn't delete
		</li>
		<hr>
		<li>
			06-10-17: Stopped sources from disappearing
		</li>
		<li>
			06-10-17: Added debounce to cluster selection
		</li>
		<li>
			06-10-17: Fixed bug in rule edits
		</li>
		<li>
			06-10-17: Fixed source source suggestions
		</li>
		<hr>
		<li>
			19-09-17: Fixed map display
		</li>
		<li>
			19-09-17: Added registration email for new users
		</li>
		<hr>
		<li>
			16-09-17: Added "add another" button to phoneme examples
		</li>
		<li>
			16-09-17: Ordered open tickets by creation date and closed tickets by closed date
		</li>
		<li>
			16-09-17: Fixed bad links in user profiles
		</li>
		<hr>
		<li>
			15-09-17: Added special character typewriter to relevant fields in morphemes, forms, and examples, and to the symbol tool in textareas
			<ul>
				<li>The symbol tool layout is not ideal; a customized solution is forthcoming</li>
				<li>Typewriter for morpheme inputs in forms and examples is forthcoming</li>
			</ul>
		</li>
		<hr>
		<li>
			14-09-17: Added timestamps to tickets
			<ul>
				<li>"Date closed" times are inaccurate pre-August 23rd</li>
			</ul>
		</li>
		<li>
			14-09-17: Removed "Coming soon" from variables with no essay
		</li>
		<hr>
		<li>
			10-09-17: Style update
			<ul>
				<li>Converted the "languages" link into a dropdown with all languages</li>
				<li>Updated header styling to look better on mobile</li>
			</ul>
		</li>
		<hr>
		<li>
			08-09-17: Updated user profile addresses to be tied to user names
		</li>
		<li>
			08-09-17: Resolved the mystery of the magically unlinking morphemes
		</li>
		<li>
			08-09-17: Matched gloss colour to slots
		</li>
		<li>
			08-09-17: Prevented extraneous data from being logged on form creation
		</li>
		<hr>
		<li>
			07-09-17: Added ability to add existing examples to phonemes
		</li>
		<li>
			07-09-17: Fixed ajax calls for reflexes
		</li>
		<hr>
		<li>
			06-09-17: Added usage notes to morphemes
		</li>
		<li>
			06-09-17: Removed the requirement that examples must have forms
		</li>
		<hr>
		<li>
			05-09-17: Altered the placeholder text for morphemes in the form and example forms to be more clear
		</li>
		<hr>
		<li>
			02-09-17: Added types to rules
		</li>
		<li>
			02-09-17: Fixed archiphoneme input
		</li>
		<hr>
		<li>
			28-08-17: Updated the styling
		</li>
		<li>
			28-08-17: Added more symbols to the typewriter
		</li>
		<li>
			28-08-17: Fixed an issue viewing examples
		</li>
		<hr>
		<li>
			27-08-17: Made the smart search smarter by making it recognize multiple argument formats:
			<ul style="list-style-type: square">
				<li>
					"<strong>3sg</strong> ta"
				</li>
				<li>
					"<strong>0 s</strong> ta"
				</li>
				<li>
					"<strong>second plural</strong> ta"
				</li>
				<li>
					"<strong>3rd dual</strong> ta"
				</li>
				<li>
					"<strong>first person singular</strong> ta"
				</li>
				<li>
					"<strong>third person inanimate double obviative</strong> ta"
				</li>
			</ul>
		</li>
		<hr>
		<li>
			26-08-17: Fixed an issue concerning adding forms with morphemes
		</li>
		<hr>
		<li>
			25-08-17: Replaced the "whoops" page with a more user-friendly one
		</li>
		<hr>
		<li>
			22-08-17: Fixed forms not showing up in example form when added to
		</li>
		<hr>
		<li>
			21-08-17: Added typewriter to phoneme form
		</li>
		<hr>
		<li>
			19-08-17: Fixed an issue preventing the advanced verb form search from being displayed
		</li>
		<li>
			18-08-17: Fixed an issue preventing examples from being saved without morphemes
		</li>
		<li>
			18-08-17: Fixed an issue preventing data types with morphemes from being saved when no morphemes were specified
		</li>
		<hr>
		<li>
			15-08-17: Fixed an issue where morphemes in forms would not disappear immediately after being deleted
		</li>
		<hr>
		<li>
			12-08-17: Overhauled morpheme input (<a href="/guide#morphemes">check the guide</a>)
		<hr>
		<li>
			03-08-17: Added tooltip explaining the verb form description
		</li>
		<li>
			03-08-17: Added tooltip with suggestions to smart search
		</li>
		<li>
			03-08-17: Converted group reorder link into an icon
		</li>
		<li>
			03-08-17: Unbolded parentheses in card titles
		</li>
		<hr>
		<li>
			31-07-17: Updated the ticket guide
		</li>
		<hr>
		<li>
			30-07-17: Paginated user history logs
		</li>
		<hr>
		<li>
			28-07-17: Sorted tickets by type
		</li>
		<li>
			28-07-17: Styled emails
		</li>
		<hr />
		<li>
			25-07-17: Standardized icons
		</li>
		<hr>
        <li>
            24-07-17: Added tickets
        </li>
        <li>
            24-07-17: Reordered cluster onsets k-p-t
        </li>
        <li>
            24-07-17: Fixed archiphonemes
        </li>
        <li>
            24-07-17: Fixed bug preventing optional morphemes (i.e. morphemes wrapped in parentheses) from being recognized
        </li>
        <hr>
		<li>
            23-07-17: Reduced weight of thicker borders in form paradigms
        </li>
		<li>
            23-07-17: Merged Plains Cree Absolute/Objective/Neither
        </li>
		<li>
            23-07-17: Added legend to variable maps
        </li>
        <hr>
		<li>
			22-07-17: Updated dropdown menus
		</li>
		<li>
			22-07-17: Converted footer bullets to squares
		</li>
		<li>
			22-07-17: Removed "essay" label from variable map page
		</li>
		<li>
			22-07-17: Fixed nominal paradigm results calling possessed nouns "personal pronouns"
		</li>
		<hr>
		<li>
			20-07-17: Added clear formatting button to text editors
		</li>
		<li>
			20-07-17: Added refine option to verb form search
		</li>
		<li>
			20-07-17: Added refine option to nominal paradigm search
		</li>
		<li>
			20-07-17: Added sources to nominal paradigms
		</li>
		<hr>
		<li>
			17-07-17: Fixed webkit display issue
		</li>
		<li>
			17-07-17: Fixed display issue on mobile
		</li>
		<hr>
		<li>
			16-07-17: Paginated the main activity log
		</li>
		<li>
			16-07-17: Added aliases to groups
			<ul>
				<li>
					Similar to the "alternate names" field for languages, except group aliases are only for searching.
				</li>
			</ul>
		</li>
		<hr>
		<li>
			15-07-17: Added smart search
			<ul>
				<li>
					Queries which include a verb class will return a verb search.
					<ul>
						<li>If the query includes an argument, the search will be a form search; otherwise, it will be a paradigm search.</li>
						<li>Unless otherwise specified, searches are assumed to involve:
							<ul>
								<li>all languages</li>
								<li>conjunct and independent orders*</li>
								<li>indicative and unmarked modes</li>
								<li>affirmative</li>
								<li>non-negative</li>
							</ul>
						</li>
						<li>
							*Form searches assume only conjunct order (see below). Indicative/unmarked is still assumed because the form search treats them as the same.
						</li>
					</ul>
				</li>
				<li>
					Queries which include exactly one language or group name will return that language or group's details.
					<ul>
						<li>Searches for languages' 'alternate names' will produce hits.</li>
					</ul>
				</li>
				<li>
					Known limitations:
					<ul>
						<li>
							<strike>"TI" is not currently recognized, as it is not the name of any class.</strike> "TI" now runs a search for TI1, TI2, and TI3.
							<ul>
								<li>Searching for "ti1 ti2 ti3" will return all TI paradigms.</li>
							</ul>
						</li>
						<li>
							Arguments are relatively inflexible; "1s" is the only way to search for first person singular.
						</li>
						<li>
							Verb form searches can only look for one set of attributes (class/order/mode/arguments).
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<hr />
		<li>
			14-07-17: Limited language options in searches to only languages which have some relevant forms
		</li>
		<li>
			14-07-17: Added paradigm tables to all nominal paradigm detail pages
		</li>
		<li>
			14-07-17: Now displaying nominal paradigms in tables (syncretism still forthcoming)
		</li>
		<li>
			14-07-17: Added <a href="/nominals/search/paradigm">nominal paradigm search</a> <strike>(paradigm table display still forthcoming)</strike>
		</li>
		<hr />
		<li>
			13-07-17: Added capability for uploading and storing audio clips
			<ul>
				<li>
					Clips can be added <a href="/audio/create">here</a> and an index of uploaded audio clips can be viewed <a href="/audio">here</a>, but since audio hasn't been fully integrated into the database, no header links have been added at this point.
				</li>
				<li>
					The purpose of this update is to give the database the <em>capability</em> of dealing with audio clips. Future updates will integrate audio clips into the rest of the database.
				</li>
			</ul>
		</li>
		<hr />
		<li>
			12-07-17: Added 'subordinative' to verb modes
		</li>
		<hr />
		<li>
			11-07-17: Added parents to examples
		</li>
		<hr />
		<li>
			10-07-17: Added archiphonemes
			<ul>
				<li>All features are optional, but they require a brief text description</li>
				<li>Only phonemes can be archiphonemes. (No archiphoneme clusters)</li>
			</ul>
		</li>
		<hr />
		<li>
			08-07-17: Converted all Algonquian language text to italics
		</li>
		<li>
			08-07-17: Added an option to extend datapoints into child languages
			<ul>
				<li>
					Checking "same value in all daughter languages" will cause the datapoint to be copied into all child languages which do not already have a datapoint for the given variable
					<ul>
						<li>
							All data is copied, including sources
						</li>
						<li>
							This process is recursive; datapoints which have been extended will likewise extend to their languages' children
						</li>
					</ul>
				</li>
				<li>
					Datapoints that are being extended are marked as such on their detail page, as are datapoints that are being extended from parents
					<ul>
						<li>
							These markers are only visible to contributors
						</li>
					</ul>
				</li>
				<li>
					Editing a datapoint that is being extended will update all of the datapoints which it is extending
				</li>
				<li>
					Deleting a datapoint that is being extended or removing its extended value will cause all datapoints extended by it to be deleted
				</li>
				<li>
					Editing a datapoint which has been extended from a parent will cause it to be reclassified as a standalone datapoint and will be unaffected by changes to the parent datapoint
				</li>
				<li>
					When a datapoint is deleted, the database will check to see if the language's parent has an extending datapoint. If so, it will replace the deleted datapoint.
				</li>
				<li>
					New languages will inherit any extending datapoints from their parent
				</li>
			</ul>
		</li>
		<hr />
		<li>
			07-07-17: Moved variable tree onto its own tab
		</li>
		<li>
			07-07-17: Added coloured map to variables
		</li>
		<li>
			07-07-17: Converted variable datapoints pages to trees
		</li>
		<li>
			07-07-17: Fixed creations in log
		</li>
		<li>
			07-07-17: Added "home" link in footer
		</li>
		<li>
			07-07-17: Hyperlinked the > in phoneme reflex pages to the relevant reflex detail page
		</li>
		<hr />
		<li>
			06-07-17: Sorted cluster table
		</li>
		<li>
			06-07-17: Added reflexes of PA phonemes tables to language phoneme and cluster pages
		</li>
		<hr />
		<li>
			05-07-17: Changed display of group/language list on group detail page to an expandable tree
		</li>
		<li>
			05-07-17: Made maps detect their own centers
		</li>
		<li>
			05-07-17: Added maps to group and language detail pages
		</li>
		<li>
			05-07-17: Reorganized add menu
		</li>
		<li>
			05-07-17: Added an annoying message which shows up anytime a user visits a URL containing algling.net, prompting them to visit alglang.net instead
		</li>
		<hr />
		<li>
			04-07-17: Excluded clusters from options of cluster segments
		</li>
		<li>
			04-07-17: Fixed doubling of reconstructed phoneme asterisks
		</li>
		<hr />
		<li>
			03-07-17: Made checked variables appear at the top of the list instead of the bottom in the variable creation page
		</li>
		<li>
			03-07-17: Modified main activity log
		</li>
		<li>
			03-07-17: Altered formatting of group detail page
		</li>
		<li>
			03-07-17: Changed the ordering of the language panel's tabs
		</li>
		<hr>
		<li>
			02-07-17: Added the ability to update personal information on the profile page
		</li>
		<li>
			02-07-17: Added a <a href="resources/statistics">statistics</a> page
		</li>
		<li>
			02-07-17: Split user names into first and last names
		</li>
		<li>
			02-07-17: Removed bullets from the SS index and changed the default bullet style to square
		</li>
		<li>
			02-07-17: Added phonology module (still WIP)
		</li>
		<li>
			02-07-17: Moved source summary filter to the bottom
		</li>
		<li>
			02-07-17: Changed "add another" to icon in sources, variables indexes
		</li>
		<hr>
		<li>
			24-06-17: Hid languages without datapoints on variable list
		</li>
		<li>
			24-06-17: Added map overlay capabilities
		</li>
		<hr>
		<li>
			19-06-17: Fixed bug preventing Mi'kmaq from being displayed
		</li>
		<li>
			19-06-17: Fixed but with group ordering
		</li>
		<li>
			19-06-17: Fixed bug with languages dropping locations
		</li>
		<li>
			19-06-17: Enhanced groups by making them recursive and createable
			<ul>
				<li>
					Admin-level users can delete groups, so long as the group has a parent. Languages belonging to the deleted group will be assigned the group's parent as their new group.
				</li>
			</ul>
		</li>
		<hr>
		<li>
			16-06-17: Added credits to individual logs
		</li>
		<li>
			16-06-17: Added log to individual pages
		</li>
		<hr>
		<li>
			14-06-17: Added locations to languages
			<ul>
				<li>
					Locations can be added and changed through the standard language create/edit form
				</li>
			</ul>
		</li>
		<hr>
		<li>
			13-06-17: Added delete button for administrator-level users
		</li>
		<hr>
		<li>
			12-06-17: Source text filter is now diacritic-insensitive
		</li>
		<li>
			12-06-17: Added filter for sources with summaries
		</li>
		<li>
			12-06-17: Added flag to sources with summaries
		</li>
		<hr>
		<li>
			11-06-17: Fixed bug with language notes
		</li>
		<li>
			11-06-17: Added user history to profile
		</li>
		<hr>
		<li>
			10-06-17: Added <a href="/users">user directory</a>
		</li>
		<li>
			10-06-17: Added user profiles
		</li>
		<hr>
		<li>
			08-06-17: Added translations to examples on form details
		</li>
		<hr>
		<li>
			07-06-17: Fixed log links
		</li>
		<li>
			07-06-17: Updated header links
		</li>
		<li>
			07-06-17: Fixed custom page style class
		</li>
		<li>
			07-06-17: Unbolded source title on paradigms
		</li>
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
			</ul>
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
			23-03-17: Modified formatting of participles so â€” and + are not underlined
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
			21-02-17: Added â†’ and > to cognates tab
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

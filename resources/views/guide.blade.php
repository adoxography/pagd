@extends('layout', ['title' => 'Contributor guide'])

@section('title')
	Contributor guide
@endsection

@section('content')
<alg-tabs class="content">
	<alg-tab name="Morphology" selected="true">
		<span class="tag is-primary">New!</span>
		<h4 class="title is-4">Adding morphemes to forms and examples</h4>
		<p>Start typing in the provided textbox to bring up a list of morphemes already stored in the database. Click on one of the options, or press 'tab' or 'hyphen', and the morpheme will be added to the list of morphemes. If you would like to add a morpheme that hasn't been entered into the database yet, just type the morpheme and press 'enter'. Note that you should not include hyphens when entering morphemes this way. Morphemes can be re-ordered by dragging them to the desired placement.</p>
		<br />
		<h4 class="title is-4">Declaring initial change</h4>
		<p>Initial change is easier than ever; while in the form or example creation forms, simply click on an added morpheme. One of four actions will occur:</p>
		<ul>
			<li>If the morpheme already exists in the database and has exactly one initial change declared, the morpheme will toggle to the changed version. Clicking again will toggle it back.</li>
			<li>If the morpheme already exists in the database and has more than one initial change declared, you will be prompted to select which change you'd like.</li>
			<li>If the morpheme does not exist in the database or is registered as occupying the slot STM (but has no initial changes declared), the morpheme will change to IC.{morpheme name}. Clicking again will change it back.</li>
			<li>If the morpheme is in the database but is not registered as occupying the slot STM, nothing will happen.</li>
		</ul>
		<br />
		<h4 class="title is-4">Adding a morpheme after it has been added to a form</h4>
		<p>If you create a morpheme after it has been declared in a form or example, the database will link up the form and morpheme for you. Be aware, though, that you may need to disambiguate forms should you create more than one such morpheme.</p>
	</alg-tab>

	<alg-tab name="Initial Change">
		<h4 class="title is-4">Registering initial change</h4>
		<p>Because initial change is unpredictable, you will need to <a href="/changes">register the initial change with the database</a>. You must have already entered the morpheme which the initial change is supposed to affect. To register the initial change, enter the language of the morpheme, and then begin typing the name of the morpheme. The database will present you with options from the selected language. Finally, indicate what the morpheme should change to.</p>
		<br />
		<h4 class="title is-4">Adding initial change to a form before the initial change is registered</h4>
		<p>This is not a problem for the database. Morphemes which have initial change added retroactively will be updated automatically. In fact, some morphemes (notably the abstract verb stem, <strong>V</strong>) will never have an initial change registered. Such morphemes will be displayed as
		<strong>IC.morpheme</strong>.</p>
	</alg-tab>

	<alg-tab name="Shortcuts">
		<h4 class="title is-4">What is a shortcut?</h4>
		<p>A shortcut is a shorthand to another piece of data in a text field. It allows you to type less, and will update automatically when the referenced data changes. It is primarily used for working with rules; however, a similar approach can be used to represent many other kinds of data.</p>
		<br />
		<h4 class="title is-4">Adding a rule</h4>
		<p>Rules are added in the same way as any other piece of data, via their own <a href="/rules/create">creation form</a>. Pay special attention to the "abbreviation" field, as that is what you will use to call the rule later on.</p>
		<br />
		<h4 class="title is-4">Referencing a rule</h4>
		<p>Rules can be referenced anywhere there is block text in the database - in most cases, this will be in notes fields. To reference a rule, enter a "#", followed by the rule abbreviation. When the text is rendered, this code will be replaced by the rule itself.</p>
		<br />
		<h4 class="title is-4">Referencing a rule before it has been added</h4>
		<p>This is possible, but be careful. If the database cannot find a matching rule when it comes time to render the text, it will simply print out the abbreviation you have given, which is generally unhelpful. Always make sure to add rules within the same time frame as when you reference them.
		</p>
		<br />
		<h4 class="title is-4">Shortcuts to pieces of data other than rules</h4>
		<p>There may be times when you want to print the full morphology of a form or morpheme. The database has some built-in shortcuts to help you with this. All you need is the ID number of the desired data; this can be found as the number at the end of the URL of that data's display page. This number is unique across that kind of data, so there will never be an overlap, even across languages.</p>
		<table style="width: inherit;">
			<thead>
				<tr>
					<th>Type of data</th>
					<th>Shortcut syntax</th>
					<th>What will be rendered</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Language</td>
					<td>#l.id</td>
					<td>The name of the language, hyperlinked to its display page</td>
				</tr>
				<tr>
					<td>Form</td>
					<td>#f.id</td>
					<td>
						The phonological representation, (or the surface form, if there is no phonological representation)<br />
						The morphemes<br />
						The morphemes' glosses
					</td>
				</tr>
				<tr>
					<td>Example</td>
					<td>#e.id</td>
					<td>
						The example<br />
						The morphemes<br />
						The morphemes' glosses<br />
						The translation
					</td>
				</tr>
				<tr>
					<td>Morpheme</td>
					<td>#m.id</td>
					<td>The morpheme, immediately followed by its translation (if applicable) or gloss</td>
				</tr>
			</tbody>
		</table>
	</alg-tab>
	<alg-tab name="Glosses">
		<h4 class="title is-4">Adding glosses to morphemes</h4>
		<p>Because the gloss for a particular morpheme may be a combination of glosses, entering them is done differently from other fields, such as a morpheme's slot. Instead of just typing a gloss abbreviation into the text field and leaving it, press "enter" or click on an option provided to add the gloss to the morpheme's list of glosses. These glosses will be displayed together, separated by periods.</p>
		<br />
		<h4 class="title is-4">Adding glosses that aren't in the list</h4>
		<p>It may be the case that you want to use a gloss that hasn't been added yet. If this is the case, just type the abbreviation you want to use, and press "enter." The gloss will appear in the same way as any other gloss; the only difference is that it won't be linked to any gloss detail page. When the gloss is added, the link will be updated automatically.</p>
		<br />
		<h4 class="title is-4">Adding multiple glosses at once</h4>
		<p>The gloss input is designed to help you by suggesting possible glosses, but if you already know what the abbreviations of the glosses you want are, you can add multiple glosses at once by separating them with periods, exactly as you might expect to see them when rendered.</p>
		<br />
		<h4 class="title is-4">Adding translations as glosses</h4>
		<p>Translation-style glosses need to be handled differently from other kinds of glosses (e.g. they don't appear in small caps). To let the database know that the gloss you've entered is a translation, just surround it with double quotes. Although it is true that translation-style glosses should be interspersed with periods, you should enter your translation with spaces, because otherwise, the database will assume that you're trying to add multiple glosses (see above). The spaces will be converted to periods when the gloss is rendered.</p>
	</alg-tab>

	<alg-tab name="Tickets">
		<h4 class="title is-4">What is a ticket?</h4>
		<p>A ticket is a method for reporting errors and requesting new features.</p>
		<br />
		<h4 class="title is-4">What do I need to submit a ticket?</h4>
		<p>That depends on the kind of ticket you're submitting. A simple request, like "add mode X," just needs a title. Other requests may need more; for example, errors should include as much detail as possible on what you were doing, when you were doing it, and what page it occurred on. Requests for entirely new features may need some justification for how you think the feature will add to the site.</p>
		<br />
		<h4 class="title is-4">What does marking a ticket as "urgent" do?</h4>
		<p>Marking a ticket as "urgent" sends an immediate notification to the developer. Issues such as not being able to add data or security issues should be considered urgent.</p>
		<h4 class="title is-4">How will I know when my ticket is closed?</h4>
		<p>You can opt to receive an email notification (using the email you signed up with) when you open your ticket. You can change this selection at any time by viewing the ticket's page. Additionally, if you are interested in a ticket someone else has opened, you are free to opt in for notifications to that ticket as well.</p>
	</alg-tab>
</alg-tabs>

@endsection

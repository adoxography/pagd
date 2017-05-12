@extends('layout', ['title' => 'Contributor guide'])

@section('title')
	Contributor guide
@endsection

@section('content')
<alg-tabs>
	<alg-tab name="Morphemes" selected="true">
		<h4 class="title is-4">Adding morphemes to forms and examples</h4>
		<p>Morphemes are entered by separating them by hyphens, exactly as you might expect. So if a form has four morphemes, <strong>ne-</strong>, <strong>V</strong> (an abstract placeholder for the verb stem), <strong>-e:</strong>, and <strong>-ehm</strong>, the morphemes can be entered by simply inputting</p>
		<blockquote>ne-V-e:-ehm</blockquote>
		<br />
		<h4 class="title is-4">Adding a form before adding its morphemes</h4>
		<p>This is no problem for the database. If it cannot connect a morpheme in the morphemic form to an existing morpheme in the database, it will simply display the text it's been given as the morpheme. You can add the morpheme later at any time and it will automatically update the forms that should include it.</p>
		<br />
		<h4 class="title is-4">Dealing with homophony</h4>
		<p>In most cases, the database can recognize which existing morphemes should be connected to a form or example. Where there are homophonous morphemes, however, the database will need some extra information from you. Every morpheme entered into the database is assigned a unique "disamibiguator," which is displayed as a number in superscript next to the morpheme on its display page. This number is used to disambiguate between two homophonous morphemes. The syntax for entering a morpheme into a form or example is:</p>
		<blockquote>[ - ]morpheme[ .disambiguator ][ - ]</blockquote>
		<p>where "morpheme" and "disambiguator" are replaced with the relevant morpheme and disambiguator, respectively. Using the same example from earlier, if you want to indicate that <strong>-e:<sup>2</sup></strong> should be connected, you can indicate it like so:</p>
		<blockquote>ne-V-e:<strong>.2</strong>-ehm</blockquote>
		<p>Note that disambiguators are assigned irrespective of hyphen location, so <strong>e:-</strong> and <strong>-e:</strong> are treated as homophonous morphemes by the database.</p>
		<br />
		<h5 class="title is-5">Add disambiguators as much as you can</h5>
		<p>Sometimes homophonous morphemes are added to the database which we weren't expecting. This can cause the database to become confused about which morpheme should be connected to a form. Using the earlier example, if a second <strong>ne-</strong> were added to the database, it would be unclear as to whether <strong>ne-<sup>1</sup></strong> (the first <strong>ne-</strong> entered) or <strong>ne-<sup>2</sup></strong> is meant to be connected. In such a case, the database will revert to only showing the text to the public. It's easy enough to clarify which morpheme the database should use, but you can save yourself some hassle later down the road by pre-emptively declaring that a form uses <strong>ne-<sup>1</sup></strong> like so:</p>
		<blockquote>ne<strong>.1</strong>-V-e:.2-ehm</blockquote>
		<p>Since all morphemes receive a disambiguator, a morpheme without any homophones will always have a disambiguator of 1.</p>
		<p>There will be cases where it may be unclear as to which homophonous morpheme is part of a form. These are places where you should leave the disambiguator off entirely. You can come back and clarify it later when you have a better idea.</p>
	</alg-tab>

	<alg-tab name="Initial Change">
		<h4 class="title is-4">Adding initial change to a morpheme of a form or example</h4>
		<p>The syntax for indicating that a morpheme has undergone initial change is similar to that of <a href=”/guide#Morphemes”>adding a disambiguator to a morpheme</a>. Before the morpheme (but after its preceeding hyphen, if it has one), include “IC|”. For example:</p>
		<blockquote><strong>IC|</strong>V-t-i</blockquote>
		<blockquote><strong>IC|</strong>e-t-i</blockquote>
		<br />
		<h4 class="title is-4">Registering initial change</h4>
		<p>Because initial change is unpredictable, you will need to <a href="/changes">register the initial change with the database</a>. You must have already entered the morpheme which the initial change is supposed to affect. To register the initial change, enter the language of the morpheme, and then begin typing the name of the morpheme. The database will present you with options from the selected language. Finally, indicate what the morpheme should change to.</p>
		<br />
		<h4 class="title is-4">Adding initial change to a form before the initial change is registered</h4>
		<p>This is not a problem for the database. Morphemes which have initial change added retroactively will be updated automatically. In fact, some morphemes (notably the abstract verb stem, <strong>V</strong>) will never have an initial change registered. Such morphemes will be displayed as
		<strong>IC.morpheme</strong>.</p>
		<br />
		<h4 class="title is-4">Dealing with multiple possible initial changes on a single morpheme</h4>
		<p>Some morphemes will have more than one possible initial change, and the database cannot predict which should be used. To assist in this, the database automatically generates an Initial Change Number - think of this as a disambiguator for initial changes. It can be found on the <a href="/changes">initial change page</a>. The complete syntax for a morpheme, including the ability to specify an initial change is:</p>
		<blockquote>[ - ][ IC <strong>[ .number ]</strong> | ] morpheme[ .disambiguator ][ - ]</blockquote>
		<p>where "number" is the initial change number, "morpheme" is the desired morpheme and "disambiguator" is an optional (but recommended) morpheme disambiguator. In practice, it looks like this:</p>
		<blockquote>IC<strong>.1</strong>|e-t-i</blockquote>
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
</alg-tabs>

@endsection
@extends('layout')

@section('content')
	
	<div id="root">
		<alg-message>
			<template slot="header">
				Hi Will!
			</template>
			I've updated this since my last email. Instead of trying to display everything on one page, I've separated the language detail into tabs, with dedicated tabs for data that will end up being lengthy. I think I will also either paginate those pages or list the first n forms (or whatever) and then include a field for filtering the data. What do you think?
			<br /><br />
			I'm not sure if examples (visible in the forms tab) and morphemes really belong on here, but having them accessible like this makes it convenient for me. Those could be taken out in full production.
		</alg-message>

		<div class="heading">
			<h1 class="title">Language Details</h1>
		</div>
		<br />

		<model-card>

			<template slot="header">
				{{ $language->name }}
			</template>

			<model-card-tab name="Basic Details" selected="true">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Group</p>
					</template>
					<a href="/groups/{{ $language->group_id }}">{{ $language->group->name }}</a>
				</field-card>

				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Parent</p>
					</template>
					@if($language->parent)
						<a href="/languages/{{ $language->parent_id }}">{{ $language->parent->name }}</a>
					@else
						None
					@endif
				</field-card>

				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">ISO Code</p>
					</template>
					{{ $language->iso }}
				</field-card>

				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Algonquianist Code</p>
					</template>
					{{ $language->algoCode }}
				</field-card>
						
			</model-card-tab>

			<model-card-tab name="Children">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Children</p>
						@if(Auth::user())
							<a class="card-header-icon" href="/languages/{{ $language->id }}/addChild">
								<span class="icon" title="Add another">
									<i class="fa fa-plus-square"></i>
								</span>
							</a>
						@endif
					</template>
					@if(count($language->children) > 0)
						<ul>
							@foreach($language->children as $child)
								<li><a href="/languages/{{ $child->id }}">{{ $child->name }}</a></li>
							@endforeach
						</ul>
					@else
						None
					@endif
				</field-card>
				
			</model-card-tab>

			<model-card-tab name="Forms">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Forms</p>
						@if(Auth::user())
							<a class="card-header-icon" href="/languages/{{ $language->id }}/addForm">
								<span class="icon" title="Add another">
									<i class="fa fa-plus-square"></i>
								</span>
							</a>
						@endif
					</template>
					@if(count($language->forms) > 0)
						<ul>
							@foreach($language->forms as $form)
								<li><a href="/forms/{{ $form->id }}">{{ $form->surfaceForm }}</a></li>
							@endforeach
						</ul>
					@else
						None
					@endif
				</field-card>
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Examples</p>
						@if(Auth::user())
							<a class="card-header-icon" href="/languages/{{ $language->id }}/addExample">
								<span class="icon" title="Add another">
									<i class="fa fa-plus-square"></i>
								</span>
							</a>
						@endif
					</template>
					@if(count($language->examples) > 0)
						<ul>
							@foreach($language->examples as $example)
								<li><a href="/examples/{{ $example->id }}">{{ $example->name }}</a></li>
							@endforeach
						</ul>
					@else
						None
					@endif
				</field-card>
			</model-card-tab>

			<model-card-tab name="Morphemes">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Morphemes</p>
						@if(Auth::user())
							<a class="card-header-icon" href="/languages/{{ $language->id }}/addMorpheme">
								<span class="icon" title="Add another">
									<i class="fa fa-plus-square"></i>
								</span>
							</a>
						@endif
					</template>
					@if(count($language->morphemes) > 0)
						<ul>
							@foreach($language->morphemes as $morpheme)
								@if($morpheme->name != "V")
									<li><a href="/morphemes/{{ $morpheme->id }}">{{ $morpheme->name }}</a></li>
								@endif
							@endforeach
						</ul>
					@else
						None
					@endif
				</field-card>
			</model-card-tab>

			@if(Auth::user())
				<template slot="footer">
					<a class="card-footer-item">Edit</a>
					<a class="card-footer-item">Delete</a>
				</template>
			@endif

		</model-card>

	</div>

@stop
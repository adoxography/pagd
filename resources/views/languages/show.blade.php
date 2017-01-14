@extends('layout')

@section('content')
	
	<div class="heading">
		<h1 class="title">Language Details</h1>
	</div>
	<br />

	<div id="root">
		<model-card>

			<template slot="header">
				{{ $language->name }}
			</template>

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
					<a href="#">None</a>
				@endif
			</field-card>

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

			<div class="column is-half">
			</div>

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

			<field-card width="is-one-third">
				<template slot="label">
					<p class="card-header-title">Forms</p>
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
			<field-card width="is-one-third">
				<template slot="label">
					<p class="card-header-title">Morphemes</p>
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
			<field-card width="is-one-third">
				<template slot="label">
					<p class="card-header-title">Examples</p>
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

			@if(Auth::user())
				<template slot="footer">
					<a class="card-footer-item">Edit</a>
					<a class="card-footer-item">Delete</a>
				</template>
			@endif

		</model-card>

	</div>

@stop
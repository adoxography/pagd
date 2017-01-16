@extends('layout')

@section('content')
	<div id="root">

		<div class="heading">
			<h1 class="title">Morpheme Details</h1>
		</div>
		<br />

		<model-card>

			<template slot="header">
				<em>{{ $morpheme->name }}</em> (<a href="/languages/{{ $morpheme->language_id }}">{{ $morpheme->language->name }}</a>)
			</template>

			<model-card-tab name="Basic Details" selected="true">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Gloss</p>
					</template>
					<a href="/glosses/{{ $morpheme->gloss_id }}">{{ $morpheme->gloss->abv }}</a>
				</field-card>				
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Slot</p>
					</template>
					<a href="/slots/{{ $morpheme->slot_id }}">{{ $morpheme->slot->abv }}</a>
				</field-card>				

				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Parent</p>
					</template>
					@if($morpheme->parent)
						<a href="/morphemes/{{ $morpheme->parent_id }}">{{ $morpheme->parent->name }}</a> (<a href="/languages/{{ $morpheme->parent->language_id }}">{{ $morpheme->parent->language->name }}</a>)
					@else
						Unknown/Unclear
					@endif
				</field-card>
			</model-card-tab>			

			<model-card-tab name="Forms">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Forms</p>
					</template>
					@if($morpheme->forms)
						<ul>
							@foreach($morpheme->forms as $form)
								<li><a href="/forms/{{ $form->id }}">{{ $form->surfaceForm }}</a></li>
							@endforeach
						</ul>
					@else
						None
					@endif
				</field-card>
			</model-card-tab>

			<model-card-tab name="Allomorphy Notes">
				<field-card>
					<template slot="label">
						<p class="card-header-title">Allomorphy Notes</p>
					</template>
					@if($morpheme->historicalNotes)
						{!! $parser->setRestricted(true)->parse($morpheme->allomorphyNotes) !!}
					@else
						None
					@endif
				</field-card>
			</model-card-tab>

			<model-card-tab name="Historical Notes">
				<field-card>
					<template slot="label">
						<p class="card-header-title">Historical Notes</p>
					</template>
					@if($morpheme->historicalNotes)
						{!! $parser->setRestricted(true)->parse($morpheme->historicalNotes) !!}
					@else
						None
					@endif
				</field-card>
			</model-card-tab>						

			@if(Auth::user())
				<model-card-tab name="Hidden Comments">
					<field-card>
						<template slot="label">
							<p class="card-header-title">Comments</p>
						</template>
						@if($morpheme->historicalNotes)
							{!! $parser->setRestricted(true)->parse($morpheme->comments) !!}
						@else
							None
						@endif
					</field-card>
				</model-card-tab>
			@endif

			<model-card-tab name="Sources">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Hover over a source for the full citation</p>
					</template>
					@if(count($morpheme->sources) > 0)
						<ol>
							@foreach($morpheme->sources as $source)
								<li title="{{ $source->long }}">{{ $source->short }}</li>
							@endforeach
						</ol>
					@else
						None
					@endif
				</field-card>
			</model-card-tab>

			@if(Auth::user())
				<template slot="footer">
					<a class="card-footer-item" href = "/morphemes/{{ $morpheme->id }}/edit">Edit</a>
					<a class="card-footer-item">Delete</a>
				</template>
			@endif
		</model-card>
	</div>

{{-- 	<div class = 'show'>
		<h1>{{ $morpheme->name }} (<a href='/languages/{{ $morpheme->language->id }}'>{{ $morpheme->language->name}}</a>) (<a href = '/morphemes/{{ $morpheme->id }}/edit'>Edit</a>)</h1>
		<ul>
			{{ Html::field('Gloss:',                      $morpheme->gloss->abv,                                   '/glosses/'.$morpheme->gloss->id           ) }}
			{{ Html::field('Slot:',                       $morpheme->slot->abv,                                    '/slots/'.$morpheme->slot->id              ) }}
			{{ Html::field('Parent:', $morpheme->parent ? $morpheme->parent->name : 'Unknown', $morpheme->parent ? '/morphemes/'.$morpheme->parent->id : false) }}
			{{ Html::multi('Found in:', $morpheme->forms, '/forms', 'surfaceForm') }}
			{{ Html::para('Comments:',         $morpheme->comments,        $parser) }}
			{{ Html::para('Historical Notes:', $morpheme->historicalNotes, $parser) }}
			{{ Html::para('Allomorphy Notes:', $morpheme->allomorphyNotes, $parser) }}
		</ul>

		<form method = 'POST' action = '/morphemes/{{ $morpheme->id }}' class = 'deleteButton'>
			{{ method_field('DELETE') }}
			{{ csrf_field() }}
			<button type='submit'>Delete</button>
		</form>
	</div> --}}

@stop
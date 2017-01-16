@extends('layout')

@section('content')

	<div class="heading">
		<h1 class="title">Morpheme Details</h1>
	</div>
	<br />

	<div id="root">
		<model-card>

			<template slot="header">
				<em>{{ $morpheme->name }}</em>
			</template>
		</model-card>
	</div>

	<div class = 'show'>
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
	</div>

@stop
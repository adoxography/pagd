@extends('layout', ['title' => $phoneme->name])

@section('title')
	<label>
		@if($phoneme->isArchiphoneme)
			Archiphoneme
		@elseif($phoneme->type == 'Cluster')
			Cluster
		@else
			Phoneme
		@endif
		details:
	</label>
	{!! $phoneme->present()
				->as('name', 'bold')
				->with('language')
				->as('link',
					 $phoneme->type == 'Cluster' ? 'clusters' : 'phonemes'
				)
	!!}
@endsection

@include('components.show-icons', ['model' => $phoneme])

@section('panel')
	@include('phon::phonemes.partials.panel')
@endsection
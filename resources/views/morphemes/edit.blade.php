@extends('layout', ['title' => "Edit {$morpheme->name} ({$morpheme->language->name})"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit a Morpheme</h1>
	</div>
	<br />

	<alg-morpheme-form method="PATCH"
					   action="/morphemes/{{ $morpheme->id }}"
					   languages="{{ $languages }}"
					   glosses="{{ $glosses }}"
					   slots="{{ $slots }}"
					   change-types="{{ $changeTypes->toJson() }}"
					   morpheme="{{ $morpheme }}">
	</alg-morpheme-form>
	
@stop
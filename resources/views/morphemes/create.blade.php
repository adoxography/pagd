@extends('layout', ['title' => "Add a morpheme"])

@section('content')

	<div class="heading">
		<h1 class="title">Add a Morpheme</h1>
	</div>
	<br />

	<alg-morpheme-form method="POST"
					   action="/morphemes"
					   languages="{{ $languages }}"
					   glosses="{{ $glosses }}"
					   slots="{{ $slots }}"
					   change-types="{{ $changeTypes->toJson() }}"
					   language="{{ $presetLanguage or "" }}"
					   parent="{{ $presetParent or "" }}">
	</alg-morpheme-form>

@stop
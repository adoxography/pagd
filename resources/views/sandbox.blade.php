@extends('layout')

@section('content')

	@php
		$audio = \App\Audio::first();
	@endphp

	{!! $audio->present() !!}

		<form method="POST" action="/upload/audio" enctype="multipart/form-data">
			{{ csrf_field() }}
			<h1>Upload files</h1>

			<alg-file-upload></alg-file-upload>

			<div class="field">
				<button type="submit" class="button is-success">Submit</button>
			</div>
		</form>
@endsection
@extends('layout', ['title' => "Edit {$morpheme->name}"])

@section('title')
	<label>Editing </label>
	{{ $morpheme->name }}
@endsection

@section('content')
	@include('morph::morphemes.partials.form', ['method' => 'PATCH', 'action' => "/morphemes/{$morpheme->id}"])
@stop
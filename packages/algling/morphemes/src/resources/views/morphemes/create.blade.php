@extends('layout', ['title' => "Add morpheme"])

@section('title')
	Add morpheme
@endsection

@section('content')
	@include('morph::morphemes.partials.form', ['method' => 'POST', 'action' => "/morphemes"])
@endsection
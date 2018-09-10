@extends('layout', ['title' => 'Edit '.($item->abv ? $item->abv : $item->name)])

@section('title')
	<label>Editing </label>
	{{ $item->abv ?? $item->name }}
@endsection

@section('content')
	@include('closed.partials.form', ['method' => 'PATCH', 'action' => '/'.strtolower($item->plural)."/{$item->id}", 'model' => $item])
@endsection

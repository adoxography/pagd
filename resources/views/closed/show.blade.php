@extends('layout', ['title' => ($item->abv ? $item->abv : $item->name)])

@php
$namespace = strtolower(array_last(explode('_', $item->table)));
@endphp

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">{{ $item->singular }} details</h2>
<h1 class="title is-4">
	{{ $item->abv ?? $item->name }}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $item, 'namespace' => $namespace])
@endsection

@section('content')
@if(Schema::hasColumn($item->getTable(), 'abv'))
<div class="field">
    <span class="label">Full name</span>
    {{ $item->name }}
</div>
@endif

<div class="field">
    <span class="label">Description</span>
    {!! $item->description ?? 'None provided' !!}
</div>
@endsection

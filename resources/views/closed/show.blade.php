@extends('layout', ['title' => ($item->abv ? $item->abv : $item->name)])

@section('title')
	<label>{{ $item->singular }} details:</label>
	{{ $item->abv ?? $item->name }}
@endsection

@include('components.show-icons', ['model' => $item])

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

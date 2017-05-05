@extends('layout')

@section('title')
<p class="card-header-title">
	Welcome{{ Auth::user() ? ', '.Auth::user()->name : '' }}
</p>
@endsection

@section('content')

<div class="card-content">
	{!! $page !!}
</div>

@stop
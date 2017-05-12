@extends('layout', ['title' => 'Add a datapoint'])

@section('title')
	Add a datapoint
@endsection

@section('content')

<div class="card-content">
	@include('ss::datapoints.partials.form', ['method' => 'POST', 'action' => '/datapoints'])
</div>

@stop
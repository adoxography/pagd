@extends('layout', ['title' => 'Initial Changes'])

@section('content')
<div class="heading">
	<h1 class="title">Initial Changes</h1>
</div>
<br />
<alg-initial-changes languages="{{ $languages }}" changes="{{ $changes }}"></alg-initial-changes>
@endsection
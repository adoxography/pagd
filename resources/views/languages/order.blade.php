@extends('layout')

@section('content')
<div class="heading">
	<h1 class="title">Order the languages</h1>
</div>
<p>
	<em>Drag the groups and languages into the desired ordering</em>
</p>
<br />
<alg-order list="{{ $groups }}"></alg-order>
@endsection
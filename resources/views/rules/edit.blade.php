@extends('layout', ['title' => 'Edit a rule'])

@section('content')
<div class="heading">
	<h1 class="title">Edit a Rule</h1>
</div>
<br />

<alg-rule-form method="PATCH"
			   action="/rules/{{ $rule->id }}"
			   languages="{{ $languages }}"
			   rule="{{ $rule }}">
</alg-rule-form>
@endsection
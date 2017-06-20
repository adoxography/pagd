@extends('layout', ['title' => "Order {$group->name} languages"])

@section('title')
	Order {{ $group->name }} languages
@endsection

@section('content')
	@component('components.form', ['method' => 'PATCH', 'action' => "/groups/{$group->id}/order", 'visible' => true])
		<alg-order :list="{{ $group->directDescendants() }}"></alg-order>
	@endcomponent
@endsection
@extends('layout')

<?php 
	$morphemes = \App\Language::find(1)->morphemes->load('slot');
	// dd($morphemes->pluck('slot')->unique());
?>

@section('content')
	<div class="box">
		<alg-filter-list list="{{ $morphemes }}" filteroptions="{{ $morphemes->pluck('slot')->unique()->toJson() }}">
		</alg-filter-list>
	</div>
@endsection
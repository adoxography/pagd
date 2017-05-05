@extends('languages/show')

@section('model-content')

<alg-filter-list list="{{ $language->morphemes }}" filteroptions="{{ $language->morphemes->pluck('slot')->unique()->sortBy('abv')->values() }}">

@endsection
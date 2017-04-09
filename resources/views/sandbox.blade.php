@extends('layout')

@section('content')

<alg-tag-input list="{{ App\Gloss::select('id','abv as name')->get() }}"></alg-tag-input>

@endsection
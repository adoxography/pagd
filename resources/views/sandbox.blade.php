@extends('layout')

@section('content')

{{ dd(\App\Language::find(1)->getParadigms()) }}

@endsection
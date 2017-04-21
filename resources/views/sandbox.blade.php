@extends('layout')

@section('content')

<alg-variable-form types="{{ App\SS\Type::all() }}" values="{{ App\SS\Value::all() }}"></alg-variable-form>

@endsection
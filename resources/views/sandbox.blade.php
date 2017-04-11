@extends('layout')

@section('content')

{{ print_r(file_get_contents(storage_path("app/SourcesList.csv"))) }}

@endsection
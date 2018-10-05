@extends('languages/show')

@section('content')
    @include('partials.show.verbs', ['language_id' => $language->id])
@endsection

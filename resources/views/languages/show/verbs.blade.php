@extends('languages/show')

@section('details')
    @include('partials.show.verbs', ['language_id' => $language->id])
@endsection

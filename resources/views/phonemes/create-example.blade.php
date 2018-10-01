@extends('layout', ['title' => 'Add an example'])

@section('title')
    <span>Add example to {!! $phoneme->present()->then('language') !!}</span>
@endsection

@section('content')
    @include('words.examples.partials.form', ['method' => 'POST', 'action' => "/phonemes/{$phoneme->id}/examples"])
@stop

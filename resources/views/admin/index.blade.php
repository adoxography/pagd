@extends('admin.layout', ['title' => 'Dashboard'])

@section('content')
    <h2 class="title is-2">Statistics</h2>
    <p># of registered users: <strong>{{ $numUsers }}</strong></p>
    <p># of verb forms: <strong>{{ $numVerbForms }}</strong></p>
    <p># of verb examples: <strong>{{ $numVerbExamples }}</strong></p>
    <p># of nominal forms: <strong>{{ $numNominalForms }}</strong></p>
    <p># of nominal examples: <strong>{{ $numNominalExamples }}</strong></p>
    <p># of morphemes: <strong>{{ $numMorphemes }}</strong></p>
    <p># of phonemes: <strong>{{ $numPhonemes }}</strong></p>
    <p># of sources: <strong>{{ $numSources }}</strong></p>
    <p># of sources in use: <strong>{{ $numInUseSources }}</strong></p>
@endsection

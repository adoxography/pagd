@extends('admin.layout', ['title' => 'Phonemes'])

@section('content')
    <div class="columns">
        <div class="column">
            <div class="box">
                <h2 class="title is-2">Backnesses</h2>
                @include('admin.partials.data-table', $backnesses)
            </div>
            <div class="box">
                <h2 class="title is-2">Heights</h2>
                @include('admin.partials.data-table', $heights)
            </div>
            <div class="box">
                <h2 class="title is-2">Lengths</h2>
                @include('admin.partials.data-table', $lengths)
            </div>
        </div>
        <div class="column">
            <div class="box">
                <h2 class="title is-2">Manners</h2>
                @include('admin.partials.data-table', $manners)
            </div>
            <div class="box">
                <h2 class="title is-2">Places</h2>
                @include('admin.partials.data-table', $places)
            </div>
            <div class="box">
                <h2 class="title is-2">Voicings</h2>
                @include('admin.partials.data-table', $voicings)
            </div>
        </div>
        <div class="column"></div>
    </div>
@endsection

@extends('admin.layout', ['title' => 'Morphemes'])

@section('content')
    <div class="columns">
        <div class="column">
            <h2 class="title is-2">Slots</h2>
            @include('admin.partials.data-table', $slots)
        </div>
        <div class="column">
            <h2 class="title is-2">Change types</h2>
            {{--@include('admin.partials.data-table', $changeTypes)--}}
        </div>
    </div>
@endsection

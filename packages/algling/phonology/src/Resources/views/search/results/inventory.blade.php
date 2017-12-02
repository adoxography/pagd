@extends('layout', ['Inventory search results'])

@section('title')
    Inventory search results
@endsection

@section('content')
    <label class="label">{{ $pa->present() }}</label>
    @include("languages.show.partials.$type", [
        'localInventory' => $pa->inventory
    ])

    @foreach ($languages as $language)
        <label class="label">{{ $language->present() }}</label>
        @include("languages.show.partials.$type", [
            'localInventory' => $language->inventory
        ])
    @endforeach
@endsection

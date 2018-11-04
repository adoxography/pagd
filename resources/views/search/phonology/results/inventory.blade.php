@extends('layout', ['Inventory search results'])

@section('title')
    Inventory search results
@endsection

@section('content')
    @component('components.form', ['method' => 'GET', 'action' => '/phonemes/search'])
        <input type="hidden" name="params" value="{{ $params or '' }}">
        <button class="button" type="submit">Refine</button>
    @endcomponent
    <br />

    <label class="label">{!! $pa->present()->link('phonemes') !!}</label>
    @include("languages.show.partials.$type", [
        'localInventory' => $pa->inventory
    ])

    @foreach ($languages as $language)
        <label class="label">{!! $language->present()->link('phonemes') !!}</label>
        @include("languages.show.partials.$type", [
            'localInventory' => $language->inventory
        ])
    @endforeach
@endsection

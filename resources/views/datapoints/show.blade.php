@extends('layout', ['title' => 'Datapoint'])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Datapoint details</h2>
<h1 class="title is-4">{!! $datapoint->present() !!}</h1>
@endsection

@section('icons')
    @include('partials.show.icons', ['model' => $datapoint, 'namespace' => 'datapoints'])
@endsection

@section('content')
<div class="columns">
    <div class="column">
        <div class="field">
            <span class="label">Language</span>
            {!! $datapoint->language->present('link') !!}
        </div>
        <div class="field">
            <span class="label">Variable</span>
            <a href="/variables/{{ $datapoint->variable_id }}">{{ $datapoint->variable->name }}</a>
        </div>
        <div class="field">
            <span class="label">Value</span>
            {{ $datapoint->value->name }}
        </div>
        @if($datapoint->note)
            <div class="field">
                <span class="label">Note</span>
                {!! $datapoint->note !!}
            </div>
        @endif
    </div>
    <div class="column">
        @can('add content')
            @if ($datapoint->isExtension)
                <div class="field">
                    <span class="label">Extended from <a href="/datapoints/{{ $datapoint->language->parent->getVariable($datapoint->variable)->id }}">{{ $datapoint->language->parent->present() }}</a></span>
                </div>
            @elseif ($datapoint->isExtended)
                <div class="field">
                    <span class="label">Extending to child languages</span>
                </div>
            @endif
        @endcan

        @if($datapoint->comments)
            <div class="field">
                <span class="label">Comments</span>
                {!! replaceTags($datapoint->comments) !!}
            </div>
        @endif
    </div>
</div>
<div class="field">
    <span class="label">Sources</span>
    @include('components.model.sourcelist', ['sources' => $datapoint->sources])
</div>
@endsection

@extends('layout', ['title' => $rule->name])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Rule details</h2>
<h1 class="title is-4">
    {!! $rule->present()->then('language')->as('link') !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $rule, 'namespace' => 'rules'])
@endsection

@section('content')
<div class="columns">
    <div class="column">
        <div class="field">
            <span class="label">Rule</span>
            {!! $rule->rule !!}
        </div>
        <div class="field">
            <span class="label">Abbreviation</span>
            {!! $rule->abv !!}
        </div>
        <div class="field">
            <span class="label">Type</span>
            {!! optional($rule->type)->name !!}
        </div>
    </div>
    <div class="column">
        @if($rule->publicComments)
            <div class="field">
                <span class="label">Notes</span>
                {!! replaceTags($rule->publicComments, $rule->language_id) !!}
            </div>
        @endif
        @if(Auth::user() && Auth::user()->hasPermissionTo('add content') && $rule->privateComments)
            <div class="field">
                <span class="label">Notes</span>
                {!! replaceTags($rule->privateComments, $rule->language_id) !!}
            </div>
        @endif
    </div>
</div>
<div class="field">
    <span class="label">Sources</span>
    @include('components.model.sourcelist', ['sources' => $rule->sources])
</div>
@endsection

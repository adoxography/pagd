@extends('layout', ['title' => $form->name])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Nominal form details</h2>
<h1 class="title is-4">
    {!! $form->present() !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $form, 'namespace' => 'nominalForms'])
@endsection

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'showBasic' => 'Basic details',
                'showCognates' => 'Cognates',
                'showLog' => 'Credits'
            ],
            'namespace' => 'nominalForms',
            'model' => $form
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection

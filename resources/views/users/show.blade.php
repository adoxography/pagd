@extends('layout')

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">User profile</h2>
<h1 class="title is-4">
    {!! $user->present() !!}
</h1>
@endsection

@if(Auth::user() && $user->id == Auth::user()->id)
@section('icons')
<aside class="icons">
    <a href="{{ route("users::edit", [$user->id]) }}" title="Edit">
        <span class="icon">
            <i class="fas fa-edit"></i>
        </span>
    </a>
</aside>
@endsection
@endif

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'show|profile' => 'Basic details',
                'showHistory' => 'History'
            ],
            'namespace' => 'users',
            'model' => $user
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection

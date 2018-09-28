@extends('admin.layout', ['title' => 'Verbs'])

@section('content')

    <div class="columns">
        <div class="column">
            <h2 class="title is-2">Classes</h2>
            @include('admin.partials.data-table', $classes)
            <h2 class="title is-2">Orders</h2>
            @include('admin.partials.data-table', $orders)
        </div>
        <div class="column">
            <h2 class="title is-2">Modes</h2>
            @include('admin.partials.data-table', $modes)
        </div>
        <div class="column">
        </div>
    </div>
@endsection

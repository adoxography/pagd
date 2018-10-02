@extends('admin.layout', ['title' => 'Verbs'])

@section('content')
    <div class="columns">
        <div class="column">
            <div class="box">
                <h2 class="title is-2">Classes</h2>
                @include('admin.partials.data-table', $classes)
            </div>
            <div class="box">
                <h2 class="title is-2">Orders</h2>
                @include('admin.partials.data-table', $orders)
            </div>
        </div>
        <div class="column">
            <div class="box">
                <h2 class="title is-2">Modes</h2>
                @include('admin.partials.data-table', $modes)
            </div>
        </div>
        <div class="column">
        </div>
    </div>
@endsection

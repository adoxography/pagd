@extends('languages/show')

@section('details')
<b-tabs>
    @foreach($types as $type)
    <b-tab-item label="{{ $type->name }}">
        <table class="table">
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                @foreach($type->variables as $variable)
                @php
                $datapoint = $language->datapoints->first(function ($val) use ($variable) {
                    return $val->variable_id == $variable->id;
                });
                @endphp

                @if($datapoint || (Auth::user() && Auth::user()->hasPermissionTo('add content')))
                <tr>
                    <td>
                        {!! $variable->present('link') !!}
                    </td>
                    <td>
                        @if($datapoint)
                        <a href="{{ route('datapoints::show', [$datapoint->id]) }}">
                            {{ $datapoint->value->name }}
                        </a>
                        @else
                        None entered
                        @can('add content')
                            (<a href="{{ route('variables::addDatapoint', [$variable->id, $language->id]) }}">Add</a>)
                        @endcan
                        @endif
                    </td>
                </tr>
                @endif
                @endforeach
            </tbody>
        </table>
    </b-tab-item>
    @endforeach
</b-tabs>
@endsection

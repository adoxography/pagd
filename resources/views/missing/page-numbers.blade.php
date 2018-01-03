@extends('layout', ['title' => 'Update missing page numbers'])

@section('title')
    Update missing page numbers
@endsection

@section('content')
    <alg-tabs v-cloak>
        @foreach ($sourceGroups as $rows)
            @if ($rows->count() > 0)
                <alg-tab name="{{ $rows->first()['source']->name }}" {{ $loop->first ? ':selected="true"' : '' }}>
                    <h5 class="title is-5">{{ $rows->first()['source']->name }}</h5>
                    @component('components.form', ['method' => 'PATCH', 'action' => '/missing/page-numbers', 'visible' => true])
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Language</th>
                                    <th>Type</th>
                                    <th>Source</th>
                                    <th>Page #</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($rows as $row)
                                    <tr>
                                        <input type="hidden" name="ids[]" value="{{ $row['id'] }}" />
                                        <td>{!! $row['name'] !!}</td>
                                        <td>{!! $row['language']->present() !!}</td>
                                        <td>{{ $row['type'] }}</td>
                                        <td>{!! $row['source']->present('link') !!}</td>
                                        <td><input type="text" name="pages[]" class="input" value="" /></td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @endcomponent
                </alg-tab>
            @endif
        @endforeach
    </alg-tabs>
@endsection

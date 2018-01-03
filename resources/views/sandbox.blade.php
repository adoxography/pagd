@extends('layout')

@section('content')
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
                    <td>{!! $row['name'] !!}</td>
                    <td>{!! $row['language'] !!}</td>
                    <td>{{ $row['type'] }}</td>
                    <td>{!! $row['source'] !!}
                    <td><input type="text" class="input" /></td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection

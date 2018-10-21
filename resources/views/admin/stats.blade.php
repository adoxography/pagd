@extends('admin.layout', ['title' => 'Statistics'])

@section('content')
    @foreach (['verb', 'nominal'] as $field)
        <h2 class="title is-2">{{ ucwords($field) . 's' }}</h2>
        <table class="table is-bordered">
            <thead>
                <tr>
                    <th rowspan="3">Language</th>
                    <th colspan="5">Forms</th>
                    <th colspan="5">Examples</th>
                </tr>
                <tr>
                    <th rowspan="2">Total</th>
                    <th colspan="2">w/ Morphemic Form</th>
                    <th colspan="2">Complete</th>
                    <th rowspan="2">Total</th>
                    <th colspan="2">w/ Morphemic Form</th>
                    <th colspan="2">Complete</th>
                <tr>
                    <th>#</th>
                    <th>%</th>
                    <th>#</th>
                    <th>%</th>
                    <th>#</th>
                    <th>%</th>
                    <th>#</th>
                    <th>%</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($languages as $language)
                    <tr>
                        <td>{!! $language->present('link') !!}</td>
                        <td>{{ $language->{"{$field}_forms_count"} }}</td>
                        <td>{{ $language->{"pending_{$field}_forms_count"} }}</td>
                        <td style="background-color: {!! $language->{"pending_{$field}_forms_colour"} !!};">{{ $language->{"pending_{$field}_forms_percent"} }}</td>
                        <td>{{ $language->{"complete_{$field}_forms_count"} }}</td>
                        <td style="background-color: {!! $language->{"complete_{$field}_forms_colour"} !!};">{{ $language->{"complete_{$field}_forms_percent"} }}</td>
                        <td>{{ $language->{"{$field}_examples_count"} }}</td>
                        <td>{{ $language->{"pending_{$field}_examples_count"} }}</td>
                        <td style="background-color: {!! $language->{"pending_{$field}_examples_colour"} !!};">{{ $language->{"pending_{$field}_examples_percent"} }}</td>
                        <td>{{ $language->{"complete_{$field}_examples_count"} }}</td>
                        <td style="background-color: {!! $language->{"complete_{$field}_examples_colour"} !!};">{{ $language->{"complete_{$field}_examples_percent"} }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endforeach
@endsection

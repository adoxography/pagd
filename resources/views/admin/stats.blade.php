@extends('admin.layout', ['title' => 'Statistics'])

@section('content')
    <table class="table is-bordered">
        <thead>
            <tr>
                <th rowspan="2">Language</th>
                <th colspan="4">Verbs</th>
                <th colspan="4">Nominals</th>
            </tr>
            <tr>
                <th>Forms</th>
                <th>Complete</th>
                <th>Examples</th>
                <th>Complete</th>
                <th>Forms</th>
                <th>Complete</th>
                <th>Examples</th>
                <th>Complete</th>
                <th>Morphemes</th>
                <th>Phonemes</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($languages as $language)
                <tr>
                    <td>{!! $language->present('link') !!}</td>
                    <td>{{ $language->verb_forms_count }}</td>
                    <td>{{ $language->complete_verb_forms_count }}</td>
                    <td>{{ $language->verb_examples_count}}</td>
                    <td>{{ $language->complete_verb_examples_count }}</td>
                    <td>{{ $language->nominal_forms_count }}</td>
                    <td>{{ $language->complete_nominal_forms_count }}</td>
                    <td>{{ $language->nominal_examples_count }}</td>
                    <td>{{ $language->complete_nominal_examples_count }}</td>
                    <td>{{ $language->morphemes_count }}</td>
                    <td>{{ $language->phonemes_count }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection

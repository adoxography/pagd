@extends('admin.layout', ['title' => 'Features'])

@section('content')
    <table class="table is-narrow">
        <thead>
            <tr>
                <th>Name</th>
                <th>Person</th>
                <th>Number</th>
                <th>Obviative</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($features['data'] as $feature)
                <tr>
                    <td>{{ $feature->name }}</td>
                    <td>{{ $feature->person }}</td>
                    <td>{{ $feature->numberString }}</td>
                    <td>{{ $feature->obviativeName }}</td>
                    <td>
                        @component('components.form', [
                            'method' => 'DELETE',
                            'action' => "/features/{$feature->id}"
                        ])
                            <button type="submit"
                                    class="button is-danger"
                                    @if($features['disableTest']($feature))
                                        disabled="disabled"
                                    @endif
                            >Delete</button>
                        @endcomponent
                </tr>
            @endforeach
            <tr>
                @component('components.form', ['action' => '/features'])
                    <td>
                        <input type="text" class="input" name="name" />
                    </td>
                    <td>
                        <input type="text" class="input" name="person" />
                    </td>
                    <td>
                        <input type="text" class="input" name="number" />
                    </td>
                    <td>
                        <input type="text" class="input" name="obviativeCode" />
                    </td>
                    <td>
                        <button type="submit" class="button is-primary">Add</button>
                    </td>
                @endcomponent
        </tbody>
    </table>
@endsection

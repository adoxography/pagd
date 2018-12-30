@extends('admin.layout', ['title' => 'Users'])

@section('content')
    <div class="columns">
        <div class="column">
            <div class="box">
                <h2 class="title is-2">Add codes</h2>
                <table class="table is-narrow">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Valid</th>
                            <th>Users</th>
                            <th colspan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($codes as $code)
                            <tr>
                                <td>{{ $code->code }}</td>
                                <td>{{ $code->valid ? 'Yes' : 'No' }}</td>
                                <td>{{ $code->users->count() }}</td>
                                <td>
                                    @if($code->valid)
                                        @component('components.form', [
                                            'method' => 'PATCH',
                                            'action' => "/reg-codes/{$code->id}/disable"
                                        ])
                                            <button type="submit" class="button is-danger" title="disable">
                                                <i class="fa fa-minus"></i>
                                            </button>
                                        @endcomponent
                                    @else
                                        @component('components.form', [
                                            'method' => 'PATCH',
                                            'action' => "/reg-codes/{$code->id}/enable"
                                        ])
                                            <button type="submit" class="button is-success" title="enable">
                                                <i class="fa fa-check"></i>
                                            </button>
                                        @endcomponent
                                    @endif
                                </td>

                                <td>
                                    @component('components.form', [
                                        'method' => 'DELETE',
                                        'action' => "/reg-codes/{$code->id}"
                                    ])
                                        <button type="submit"
                                                class="button is-danger"
                                                @if($code->users->count() > 0)
                                                    disabled="disabled"
                                                    title="Item in use"
                                                @else
                                                    title="Delete"
                                                @endif
                                        ><i class="fa fa-times"></i></button>
                                    @endcomponent
                                </td>
                            </tr>
                        @endforeach
                        <tr>
                            <form method="POST" action="/reg-codes/create">
                                @csrf
                                <td colspan="3">
                                    <input type="input" name="code" class="input" />
                                </td>
                                <td colspan="2">
                                    <button type="submit" class="button is-primary">Add</button>
                                </td>
                            </form>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
@endsection

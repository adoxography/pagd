@extends('admin.layout', ['title' => 'Users'])

@section('content')
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
                                <button type="submit" class="button is-danger is-small">
                                   Disable
                                </button>
                            @endcomponent
                        @else
                            @component('components.form', [
                                'method' => 'PATCH',
                                'action' => "/reg-codes/{$code->id}/enable"
                            ])
                                <button type="submit" class="button is-primary is-small">
                                    Enable
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
                                    class="button is-danger is-small"
                                    @if($code->users->count() > 0)
                                        disabled
                                    @endif
                            >Delete</button>
                        @endcomponent
                    </td>
                </tr>
            @endforeach
            <tr>
                @component('components.form', ['action' => '/reg-codes/create'])
                    <td colspan="3">
                        <input type="input" name="code" class="input" />
                    </td>
                    <td>
                        <button type="submit" class="button is-small is-success">Add</button>
                    </td>
                </form>
                @endcomponent
            </tr>
        </tbody>
    </table>
@endsection

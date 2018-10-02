<table class="table is-narrow">
    <thead>
        <tr>
            @foreach($fields as $field)
                <th>{{ ucfirst($field) }}</th>
            @endforeach
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach($data as $item)
            <tr>
                @foreach($fields as $field)
                    <td>{{ $item->$field }}</td>
                    <td>
                        @component('components.form', [
                            'method' => 'DELETE',
                            'action' => "$uri/{$item->id}"
                        ])
                            <button type="submit"
                                    class="button is-danger"
                                    @if($disableTest($item))
                                        disabled="disabled"
                                        title="Value in use"
                                    @else
                                        title="Delete"
                                    @endif
                            ><i class="fa fa-times"></i></button>
                        @endcomponent
                    </td>
                @endforeach
            </tr>
        @endforeach
        <tr>
            @component('components.form', ['action' => $uri])
                <td colspan="{{ count($fields) }}">
                    <input type="text" class="input" name="{{ $fields[0] }}" />
                </td>
                <td>
                    <button type="submit" class="button is-primary">Add</button>
                </td>
            @endcomponent
        </tr>
    </tbody>
</table>

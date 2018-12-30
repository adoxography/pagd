@extends('layout', ['title' => 'Edit profile'])

@section('title')
	Edit profile
@endsection

@section('content')
    @component('components.form', ['method' => 'PATCH', 'action' => "/users/{$user->id}"])
        <div class="columns is-multiline">
            <div class="column is-half">
                <div class="columns">
                    <div class="column">
                        @component('components.form.text', [
                            'name' => 'first_name',
                            'label' => 'First name',
                            'required' => 'true'
                        ])
                            @slot('value')
                                {{ $user->first_name }}
                            @endslot
                        @endcomponent
                    </div>
                    <div class="column">
                        @component('components.form.text', ['name' => 'lastName', 'label' => 'Last name', 'required' => 'true'])
                            @slot('value')
                                {{ $user->lastName }}
                            @endslot
                        @endcomponent
                    </div>
                </div>
            </div>
            <div class="column is-half">   
                @component('components.form.text', ['name' => 'email', 'type' => 'email', 'label' => 'Email', 'required' => 'true'])
                    @slot('value')
                        {{ $user->email }}
                    @endslot
                @endcomponent
            </div>
        </div>
        <div class="field">
            <button type="submit" class="button is-primary">Save</button>
        </div>
    @endcomponent
    @include('errors.list')
@endsection

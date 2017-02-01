@extends('layout')

@section('content')
    <div class="heading">
        <h1 class="title">Register</h1>
    </div>
    @component('components.form', ['class' => 'box', 'url' => url('/register')])
        <div class="columns is-multiline">
            <div class="column is-half">
                @component('components.form.text', ['name' => 'name', 'label' => 'Name', 'required' => 'true'])
                    @slot('value')
                        {{ old('name') }}
                    @endslot
                @endcomponent
            </div>
            <div class="column is-half">   
                @component('components.form.text', ['name' => 'email', 'type' => 'email', 'label' => 'Email', 'required' => 'true'])
                    @slot('value')
                        {{ old('email') }}
                    @endslot
                @endcomponent
            </div>

            <div class="column is-one-quarter">
                @component('components.form.text', ['name' => 'password', 'type' => 'password', 'label' => 'Password', 'required' => 'true'])
                    @slot('value')
                        {{ old('password') }}
                    @endslot
                @endcomponent
            </div>
            <div class="column is-one-quarter">
                @component('components.form.text', ['name' => 'password_confirmation', 'type' => 'password', 'label' => 'Confirm Password', 'required' => 'true'])
                    @slot('value')
                        {{ old('password_confirmation') }}
                    @endslot
                @endcomponent
            </div>
            <div class="column is-half">
                @component('components.form.text', ['name' => 'verification', 'label' => 'Verification Code', 'required' => 'true'])
                    @slot('value')
                        {{ old('verification') }}
                    @endslot
                @endcomponent
            </div>
        </div>
        <button type="submit" class="button is-primary">Register</button>
    @endcomponent
    @include('errors.list')
@endsection

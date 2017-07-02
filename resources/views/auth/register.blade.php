@extends('layout')

@section('title')
    Register
@endsection

@section('content')
    @component('components.form', ['url' => url('/register')])
        <div class="columns is-multiline">
            <div class="column is-half">
                <div class="columns">
                    <div class="column">
                        @component('components.form.text', ['name' => 'firstName', 'label' => 'First name', 'required' => 'true'])
                            @slot('value')
                                {{ old('firstName') }}
                            @endslot
                        @endcomponent
                    </div>
                    <div class="column">
                        @component('components.form.text', ['name' => 'lastName', 'label' => 'Last name', 'required' => 'true'])
                            @slot('value')
                                {{ old('lastName') }}
                            @endslot
                        @endcomponent
                    </div>
                </div>
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
        <div class="field">
            <button type="submit" class="button is-primary">Register</button>
        </div>
    @endcomponent
    @include('errors.list')
@endsection

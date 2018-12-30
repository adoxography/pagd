@extends('layout')

@section('title')
    Register
@endsection

@section('content')
@component('components.form', ['url' => url('/register')])
<alg-form method="POST" action="{{ url('/register') }}" :old-errors="{{ $errors }}">
    <table class="table details">
        <tbody>

            {{--Name--}}
            <tr>
                <th><label>Name</label></th>
                <td>
                    <b-field class="is-expanded" grouped>
                        <b-field :type="{'is-danger': errors.has('first_name')}"
                                 :message="errors.first('first_name')"
                                 expanded>
                            <label class="is-hidden-visual" for="first-name-input">First name</label>
                            <b-input id="first-name-input"
                                     name="first_name"
                                     value="{{ old('first_name') }}"
                                     required
                                     v-validate="'required'"
                                     placeholder="First">
                            </b-input>
                        </b-field>

                        <b-field :type="{'is-danger': errors.has('last_name')}"
                                 :message="errors.first('last_name')"
                                 expanded>
                            <label class="is-hidden-visual" for="last-name-input">Last name</label>
                            <b-input id="last-name-input"
                                     name="last_name"
                                     required
                                     value="{{ old('last_name') }}"
                                     v-validate="'required'"
                                     placeholder="Last">
                            </b-input>
                        </b-field>
                    </b-field>
                </td>
            </tr>

            {{--Email--}}
            <tr>
                <th><label for="email-input">Email</label></th>
                <td>
                    <b-field :type="{'is-danger': errors.has('email')}"
                             :message="errors.first('email')">
                        <b-input id="email-input"
                                 type="email"
                                 name="email"
                                 v-validate="'required'"
                                 value="{{ old('email') }}">
                        </b-input>
                    </b-field>
                </td>
            </tr>

            {{--Password--}}
            <tr>
                <th><label for="password-input">Password</label></th>
                <td>
                    <b-field :type="{'is-danger': errors.has('password')}"
                             :message="errors.first('password')">
                        <b-input id="password-input"
                                 required
                                 v-validate="'required'"
                                 type="password"
                                 name="password">
                        </b-input>
                    </b-field>
                </td>
            </tr>

            {{--Password confirmation--}}
            <tr>
                <th><label for="confirm-password-input">Confirm password</label></th>
                <td>
                    <b-field :type="{'is-danger': errors.has('password_confirmation')}"
                             :message="errors.first('password_confirmation')">
                        <b-input id="confirm-password-input"
                                 v-validate="{required: true}"
                                 required
                                 type="password"
                                 name="password_confirmation">
                        </b-input>
                    </b-field>
                </td>
            </tr>

            {{--Verification code--}}
            <tr>
                <th><label for="verification-input">Verification code</label></th>
                <td>
                    <b-field :type="{'is-danger': errors.has('verification')}"
                             :message="errors.first('verification')">
                        <b-input id="verification-input"
                                 name="verification"
                                 v-validate="'required'"
                                 required
                                 value="{{ old('verification') }}">
                        </b-input>
                    </b-field>
                </td>
            </tr>
        </tbody>
    </table>
</alg-form>
@endsection
    





        {{--<div class="columns is-multiline">--}}
            {{--<div class="column is-half">--}}
                {{--<div class="columns">--}}
                    {{--<div class="column">--}}
                        {{--@component('components.form.text', ['name' => 'first_name', 'label' => 'First name', 'required' => 'true'])--}}
                            {{--@slot('value')--}}
                                {{--{{ old('first_name') }}--}}
                            {{--@endslot--}}
                        {{--@endcomponent--}}
                    {{--</div>--}}
                    {{--<div class="column">--}}
                        {{--@component('components.form.text', ['name' => 'last_name', 'label' => 'Last name', 'required' => 'true'])--}}
                            {{--@slot('value')--}}
                                {{--{{ old('last_name') }}--}}
                            {{--@endslot--}}
                        {{--@endcomponent--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div class="column is-half">   --}}
                {{--@component('components.form.text', ['name' => 'email', 'type' => 'email', 'label' => 'Email', 'required' => 'true'])--}}
                    {{--@slot('value')--}}
                        {{--{{ old('email') }}--}}
                    {{--@endslot--}}
                {{--@endcomponent--}}
            {{--</div>--}}

            {{--<div class="column is-one-quarter">--}}
                {{--@component('components.form.text', ['name' => 'password', 'type' => 'password', 'label' => 'Password', 'required' => 'true'])--}}
                    {{--@slot('value')--}}
                        {{--{{ old('password') }}--}}
                    {{--@endslot--}}
                {{--@endcomponent--}}
            {{--</div>--}}
            {{--<div class="column is-one-quarter">--}}
                {{--@component('components.form.text', ['name' => 'password_confirmation', 'type' => 'password', 'label' => 'Confirm Password', 'required' => 'true'])--}}
                    {{--@slot('value')--}}
                        {{--{{ old('password_confirmation') }}--}}
                    {{--@endslot--}}
                {{--@endcomponent--}}
            {{--</div>--}}
            {{--<div class="column is-half">--}}
                {{--@component('components.form.text', ['name' => 'verification', 'label' => 'Verification Code', 'required' => 'true'])--}}
                    {{--@slot('value')--}}
                        {{--{{ old('verification') }}--}}
                    {{--@endslot--}}
                {{--@endcomponent--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="field">--}}
            {{--<button type="submit" class="button is-primary">Register</button>--}}
        {{--</div>--}}
    {{--@endcomponent--}}
    {{--@include('errors.list')--}}
{{--@endsection--}}

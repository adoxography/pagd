@extends('layout')

@section('title')
    Log in
@endsection

@section('content')
    <form role="form" method="POST" action="{{ url('/login') }}">
        {{ csrf_field() }}
        <div class="field">
            <p class="control has-icons-right">
                <input type="email" id="email" class="input" name="email" value="{{ old('email') }}" placeholder="Email" required autofocus />
                <span class="icon is-small is-right">
                    <i class="fas fa-envelope"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-right">
                <input type="password" id="password" class="input" name="password" placeholder="Password" required />
                <span class="icon is-small is-right">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <input type="checkbox" class="checkbox"  name="remember" /> Remember Me
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" type="submit">Login</button>
                <a href="{{ url('/password/email') }}" class="button is-text">Forgot Your Password?</a>
            </p>
        </div>
    </form>
    @include('errors.list')
@endsection

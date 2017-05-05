@extends('layout')

@section('title')
<p class="card-header-title">
    Log in
</p>
@endsection

@section('content')
    <form class="card-content" role="form" method="POST" action="{{ url('/login') }}">
        {{ csrf_field() }}
        <div class="field">
            <p class="control has-icon">
                <input type="email" id="email" class="input" name="email" value="{{ old('email') }}" placeholder="Email" required autofocus />
                <span class="icon is-small">
                    <i class="fa fa-envelope"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icon">
                <input type="password" id="password" class="input" name="password" placeholder="Password" required />
                <span class="icon is-small">
                    <i class="fa fa-lock"></i>
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
                <button class="button is-primary" type="submit">Login</button>
                <a href="{{ url('/password/email') }}" class="button is-link">Forgot Your Password?</a>
            </p>
        </div>
    </form>
    @include('errors.list')
@endsection

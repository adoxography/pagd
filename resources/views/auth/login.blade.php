@extends('layout')

@section('content')
    <div class="heading">
        <h1 class="title">Login</h1>
    </div>
    <form class="box" role="form" method="POST" action="{{ url('/login') }}">
        {{ csrf_field() }}
        <p class="control has-icon">
            <input type="email" id="email" class="input" name="email" value="{{ old('email') }}" placeholder="Email" required autofocus />
            <span class="icon is-small">
                <i class="fa fa-envelope"></i>
            </span>
        </p>
        <p class="control has-icon">
            <input type="password" id="password" class="input" name="password" placeholder="Password" required />
            <span class="icon is-small">
                <i class="fa fa-lock"></i>
            </span>
        </p>
        <p class="control">
            <input type="checkbox" class="checkbox"  name="remember" /> Remember Me
        </p>
        <p class="control">
            <button class="button is-primary" type="submit">Login</button>
            <a class="button is-link">Forgot Your Password?</a>
        </p>
    </form>

{{-- <div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="{{ url('/password/reset') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}
@endsection

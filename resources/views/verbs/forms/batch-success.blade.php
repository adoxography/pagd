@extends('layout', ['title' => 'Upload success'])

@section('title')
    Batch upload
@endsection

@section('content')
    <p>The following forms were added to the database. Please do not refresh this page.</p>
    <br />
    <ul>
        @foreach ($forms as $form)
        <li>
            {!! $form->present('link')->with('language')->as('link') !!}
        </li>
        @endforeach
    </ul>
@endsection

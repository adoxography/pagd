@extends('layout', ['title' => 'Language Index'])

@section('title')
	Languages
@endsection

@section('content')
	@can('add content')
		<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
		<br />
	@endcan

    <p>The database contains at least some information on all of the following languages. Languages with fuller bars contain more information than languages with emptier bars.</p>
    <br />

    <ul class="language-index-list">
        @foreach($languages as $language)
            <li>
                {!! $language->present('link') !!}
                <span class="activity-bar">
                    {!! $language->present('activity') !!}
                </span>
            </li>
        @endforeach
    </ul>
@stop

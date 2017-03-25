@extends('layout')

@section('content')

<div class="box">
<ul>
@foreach($morphemes as $morpheme)
<li><a href="/morphemes/{{ $morpheme->id }}">{{ $morpheme->uniqueName }}</a></li>
@endforeach
</ul>
</div>

@endsection
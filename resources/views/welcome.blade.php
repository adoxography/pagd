@extends('layout')

@section('content')

<div class="heading">
	<h1 class="title">Welcome{{ Auth::user() ? ", " . Auth::user()->name : "" }}</h1>
</div>
<br />

<div class="box">

	<p>The Database of Algonquian Language Structures is a project to provide basic information about the sounds and grammar of the Algonquian languages in an easily searchable format. The project leader is <a href="http://home.cc.umanitoba.ca/~oxfordwr/">Will Oxford</a> (<a href="http://umanitoba.ca/linguistics/">Department of Linguistics</a>, <a href="http:// http://umanitoba.ca/">University of Manitoba</a>) and the web developer is Graham Still.</p>

</div>

@stop
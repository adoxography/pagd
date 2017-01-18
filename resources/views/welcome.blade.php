@extends('layout')

@section('content')

<div class="heading">
	<h1 class="title">Welcome{{ Auth::user() ? ", " . Auth::user()->name : "" }}</h1>
</div>
<br />

<div class="box" id="root">
	<alg-message>
		<template slot="header">Hi Will!</template>
		Since my last email, I did get the dropdown menu for the "add" tab working. (You can only see that if you're logged in, though, remember.)
	</alg-message>
	<p>Insert welcome information here later</p>
</div>

@stop
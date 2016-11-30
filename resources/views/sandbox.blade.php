<?php

use Netcarver\Textile\Parser;
$parser = new Parser();

?>

@extends('layout')

@section('header')
	<link rel="stylesheet"href="//codeorigin.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//codeorigin.jquery.com/ui/1.10.2/jquery-ui.min.js"></script>
    <script src="/js/datalist.js"></script>
@stop

@section('content')
	{!! $parser->setRestricted(true)->parse(
		'|^.
		|_. row |_. row |
		|-.
		| row | row |'
	) !!}
@stop

@section('footer')
	<script>
		$(document).ready(function(){
		});
	</script>
@stop
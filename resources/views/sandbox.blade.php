@extends('layout')

@section('header')
	<script src="js/vendor.js"></script>
<!-- 	<script src="https://unpkg.com/vue/dist/vue.js"></script>
	<script src="https://unpkg.com/axios/dist/axios.js"></script> -->
    <style>
    </style>
@stop

@section('content')
	<div id="root">
	  	<form method="POST" action="/sandbox" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.id)">

	  		<algling-text label="Name:" name="name" id="mode-name" v-model="testModel"></algling-text>
			<span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span><br>

			<label for="description" class="label">Description:</label>
			<textarea id="description" class="input" v-model="form.description" ></textarea>
			<span class="help is-danger" v-text="form.errors.get('description')"></span><br>

			<button type="submit" :disabled="form.errors.any()">Submit</button>
		</form>
	</div>
@stop

@section('footer')

	<script src = '/js/sandbox.js'></script>
@stop
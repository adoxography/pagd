@extends('layout', ['title' => 'Contact'])

@section('content')

	<div class="heading">
		<h1 class="title">Contact</h1>
	</div>
	<br />


	@component('components.form')
		<div class="box">
			<div class="control is-horizontal">
				<div class="control-label">
					<label class="label">From</label>
				</div>
				<div class="control is-grouped">
					<p class="control is-expanded">
						<input class="input" type="text" placeholder="Name" name="from">
					</p>
					<p class="control is-expanded">
						<input class="input" type="email" placeholder="Email" name="email">
					</p>
				</div>
			</div>
			<div class="control is-horizontal">
				<div class="control-label">
					<label class="label">Subject</label>
				</div>
				<div class="control">
					<input class="input" type="text" placeholder="Subject" name="subject">
				</div>
			</div>
			<div class="control is-horizontal">
				<div class="control-label">
					<label class="label">Message</label>
				</div>
				<div class="control">
					<textarea class="textarea" name="body"></textarea>
				</div>
			</div>
			<p class="control is-pulled-right">
				<button type="submit" class="button is-success">Send</button>
			</p>
			<br /><br />
		</div>
	@endcomponent

@stop
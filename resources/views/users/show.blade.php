@extends('layout', ['title' => 'User Profile'])

@section('content')
	<div class="heading">
		<h1 class="title">User Profile</h1>
	</div>
	<br />
	<div class="card">
		<header class="card-header">
			<p class="card-header-title is-4" style="font-size: 20px;">
				Hello
			</p>
		</header>
		<alg-tabs>
			<model-tab name="Basic Details" selected="true">
			</model-tab>
			<model-tab name="Recent Activity">
				<ul>
				@foreach($user->revisions as $revision)
				@endforeach
				</ul>
			</model-tab>
			<model-tab name="Flags">
				
			</model-tab>
		</alg-tabs>
	</div>
@endsection
@php

// Filter out any children of the group to prevent circular relationships
if(isset($group)) {
	$output = collect();

	foreach($parents as $parent) {
		$rc = $parent->id != $group->id;

		$rc = $rc && !$group->allChildren->contains(function($value, $key) use ($parent) {
			return $value->id == $parent->id;
		});

		if($rc) {
			$output->push($parent);
		}
	}

	$parents = $output;
}

@endphp

<alg-group-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(old('sources', 'not found') !== 'not found')
	:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($group))
	:old-sources="{{ $group->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="columns">

			{{-- Name --}}
			<div class="column">
				@component('components.form.text', [
					'name'      => 'name',
					'autofocus' => true, 
					'rules'     => 'required'
				])
					@slot('value')
						@if(isset($group))
							{{ $group->name }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- Parent --}}
			<div class="column">
				@component('components.form.datalist', [
					'name'  => 'parent',
					'list'  => $parents,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($group) && $group->parent)
							{{ $group->parent->name }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>

		<hr>
		<alg-sources v-model="sources"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns">
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'  => 'publicNotes',
					'label' => 'public notes'
				])
					@slot('value')
						@if(isset($group))
							{{ $group->publicNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'  => 'privateNotes',
					'label' => 'private notes'
				])
					@slot('value')
						@if(isset($group))
							{{ $group->privateNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-group-form>
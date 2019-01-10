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

<alg-form method="{{ $method }}" action="{{ $action }}">
    <alg-model-form :lists="{groups: {{ $parents }}}"
                    :template="{{ App\Models\Group::fieldTemplate() }}"
                    @isset($group)
                    :initial="{{ $group }}"
                    @endisset
                    inline-template
                    :old-errors="{{ $errors->toJson() }}"
                    @if(old('data'))
                    :old-values="{{ old('data') }}"
                    @endif
                    v-cloak>
        <div class="details">
            @include('components.form.text', [
                'name' => 'name',
                'required' => true
            ])

            @include('components.form.tags', [
                'name' => 'aliases'
            ])

            @include('components.form.autocomplete', [
                'name' => 'parent',
                'list' => 'groups'
            ])

            @include('components.form.sources', [
                'name' => 'sources'
            ])

            @include('components.form.textarea', [
                'name' => 'public_notes'
            ])

            @include('components.form.textarea', [
                'name' => 'private_notes'
            ])
        </div>
    </alg-model-form>
</alg-form>

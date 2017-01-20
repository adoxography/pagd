@section('header')
	<script src = '/js/formUtil.js'></script>
@stop

{{ Form::algLabel('name') }}
{{ Form::algText('name', null, ['autocomplete' => 'off', 'required' => 'required']) }}

{{ Form::algLabel('group') }}
<alg-datalist init="@if(old('group_id')) {{ old('group_id') }} @else {{ isset($language) ? $language->group_id : '2' }} @endif" list="{{ $groups->toJson() }}" name="group_id" required="required"></alg-datalist>
{{ Form::algLabel('parent') }}
<alg-datalist init="@if(old('parent_id')) {{ old('parent_id') }} @else {{ isset($language) ? $language->parent_id : '1' }} @endif" list="{{ $parents->toJson() }}" name="parent_id" required="required"></alg-datalist>

{{ Form::algLabel('iso', 'ISO') }}
{{ Form::algText('iso',null,['autocomplete' => "off", 'required' => 'required']) }}
{{ Form::algLabel('algoCode', 'Algonquianist Code') }}
{{ Form::algText('algoCode',null,['autocomplete' => "off", 'required' => 'required']) }}
<button type="submit" class="button is-primary">Submit</button>

@section('footer')
	<script>
		$(document).ready(function(){
			formUtil.initDatalists();
		});
	</script>
@stop
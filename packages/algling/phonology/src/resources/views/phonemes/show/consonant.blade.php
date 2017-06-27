<span class="is-one-line">
	<span class="label">Place:</span>
	{{ $phoneme->features->place->name }}
</span>

<span class="is-one-line">
	<span class="label">Manner:</span>
	{{ $phoneme->features->manner->name }}
</span>

@if($phoneme->features->voicing)
<span class="is-one-line">
	<span class="label">Voicing:</span>
	{{ $phoneme->features->voicing->name }}
</span>
@endif

@if($phoneme->features->hasBooleans())
<span class="is-one-line">
	<span class="label">Other features:</span>
	{{ $phoneme->features->convertBooleansToString() }}
</span>
@endif
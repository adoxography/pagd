@extends('languages/show')

@section('content')

	<div class="field">
		<span class="label">
			Vowel inventory
			@include('components.model.add-icon', ['uri' => "/languages/{$language->id}/addPhoneme?type=vowel"])
		</span>

		@include('languages.show.partials.vowels')
	</div>

	<div class="field">
		<span class="label">
			Consonant inventory
			@include('components.model.add-icon', ['uri' => "/languages/{$language->id}/addPhoneme?type=consonant"])
		</span>

		@include('languages.show.partials.consonants')
	</div>

	@if($inventory->hasArchiphonemes())
		<div class="field">
			<span class="label">
				Archiphoneme inventory
			</span>

			@include('languages.show.partials.archiphonemes')
		</div>
	@endif

	@if($language->id != 1)
		<div class="field">
			<span class="label">
				Reflexes of <a href="/languages/1/phonemes">PA</a> vowels
			</span>

			@include('languages.show.partials.vowels', [
				'localInventory' => $paInventory,
				'callback' => function($phoneme) use ($language) {
					$html = '';
					$link = $phoneme->present('link');
					$different = false;
					$style = '';

					$reflexes = $language->phonemes->filter(function($value) use ($phoneme) {
						return $value->paParents->contains('id', $phoneme->id);
					});

					if($reflexes->count() > 0) {
						foreach($reflexes as $reflex) {
							$html .= '<li>' . $link . '&nbsp>&nbsp' . $reflex->present('link') . '</li>';

							$different = $different || str_replace('*', '', $phoneme->name) != str_replace('*', '', $reflex->name);
						}
					} else {
						$html .= $link . '&nbsp>&nbsp?';
					}

					if($different) {
						$style = 'style="background-color: #ffff99;"';
					}

					return "<ul $style>$html</ul>";
				}
			])
		</div>

		<div class="field">
			<span class="label">
				Reflexes of <a href="/languages/1/phonemes">PA</a> consonants
			</span>

			@include('languages.show.partials.consonants', [
				'localInventory' => $paInventory,
				'callback' => function($phoneme) use ($language) {
					$html = '';
					$link = $phoneme->present('link');
					$different = false;
					$style = '';

					$reflexes = $language->phonemes->filter(function($value) use ($phoneme) {
						return $value->paParents->contains('id', $phoneme->id);
					});

					if($reflexes->count() > 0) {
						foreach($reflexes as $reflex) {
							$html .= '<li>' . $link . '&nbsp>&nbsp' . $reflex->present('link') . '</li>';

							$different = $different || str_replace('*', '', $phoneme->name) != str_replace('*', '', $reflex->name);
						}
					} else {
						$html .= $link . '&nbsp>&nbsp?';
					}

					if($different) {
						$style = 'style="background-color: #ffff99;"';
					}

					return "<ul $style>$html</ul>";
				}
			])
		</div>

		<div class="field">
			<span class="label">
				Reflexes of <a href="/languages/1/phonemes">PA</a> archiphonemes
			</span>

			@include('languages.show.partials.archiphonemes', [
				'localInventory' => $paInventory
			])
	@endif
@endsection

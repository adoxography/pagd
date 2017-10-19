@extends('languages/show')

@section('content')

	<div class="field">
		<span class="label">
			{{ $language->id == 1 ? 'Clusters' : 'Primary clusters' }}
			@include('components.model.add-icon', ['uri' => "/languages/{$language->id}/addPhoneme?type=cluster"])
		</span>

		@include('languages.show.partials.clusters')
	</div>

	@if ($language->id != 1)
		<div class="field">
			<span class="label">
				Reflexes of <a href="/languages/1/clusters">PA</a> clusters
			</span>

			@include('languages.show.partials.clusters', [
				'localInventory' => $paInventory,
				'callback' => function($phoneme) use ($language) {
					$html = '';
					$link = $phoneme->present('link');
					$style = '';
					$different = false;

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
	@endif
@endsection

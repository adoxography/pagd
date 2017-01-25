<div class="column {{ $width or "" }}">
	<div class="card" style="box-shadow:none;">
		<div class="card-header" style="box-shadow:none;">
			<p class="card-header-title" style="margin-bottom: 0;">
				{{ $label }}
			</p>
		</div>
		<div class="card-content" style="padding-left: .75rem; padding-bottom: 0; padding-top: 0;">
			<div class="content">
				{{ $slot }}
			</div>
		</div>
	</div>
</div>
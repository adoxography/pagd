<section class="hero" id="header">
	<div class="hero-body">
		<div class="container">
			<div class="tile is-ancestor">
				<div class="tile is-parent is-3" id="logo">
					<div id="logo-background">
						<a href="/">
							<div class="tile is-child">
								<h4 class="title is-4">Database of Algonquian Language Structures</h4>
							</div>
						</a>
					</div>
				</div>
				<div class="tile is-parent is-3">
					<div class="tile is-child" id="main-menu">
						@include('layout.main-menu')
					</div>
				</div>
				<div class="tile is-vertical is-parent">
					<div class="tile is-child">
						<div class="columns">
							<div class="column">
								@include('search.smart')
							</div>
							<div class="column is-narrow-desktop" id="user-menu">
								@include('layout.user-menu')
							</div>
						</div>
					</div>
					<div class="tile is-child" id="action-menu">
						@include('layout.action-menu')
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php

namespace App\Palette;

use MikeAlmond\Color\Color;

class Generator {

	public function generate(Color $color, $n)
	{
		$palette = [];
		$degrees = 360 / $n;

		for($i = 0; $i < $n; $i++) {
			$palette[] = $color->adjustHue($degrees * $i);
		}

		return $palette;
	}
}
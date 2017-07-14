<?php

namespace App;

use Spatie\FlysystemDropbox\DropboxAdapter as SpatieDropboxAdapter;

class DropboxAdapter extends SpatieDropboxAdapter
{
	public function getUrl($path)
	{
		return $this->client->getTemporaryLink($path);
	}
}
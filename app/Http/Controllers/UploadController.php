<?php

namespace App\Http\Controllers;

use App\Audio;

class UploadController extends Controller
{
    public function audio()
    {
        $files = request()->file('fileData');
        $names = request()->fileText;
        $languages = [1];

        $audios = [];

        for($i = 0; $i < count($files); $i++) {
            $audios[] = Audio::upload($files[$i], [
                'displayName' => $names[$i],
                'language_id' => $languages[$i]
            ]);
        }

        dd($audios);

    	$successes = $this->upload(request()->file('files'), 'audio');

    	return json_encode($successes);
    }

    protected function upload($files, $dir)
    {
    	$successes = [];
    	$i = 0;

    	foreach($files as $file) {
    		$path = $file->store($dir, 'dropbox');

    		$successes[] = ['name' => 'file ' . $i++, 'url' => $path];
    	}

    	return $successes;
    }
}

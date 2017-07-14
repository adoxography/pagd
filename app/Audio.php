<?php

namespace App;

use App\Events\Audio\Deleting;
use App\Language;
use GuzzleHttp\Exception\ConnectException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Storage;

class Audio extends Model
{
    use BookmarkableTrait;

    public $table = 'Audio';

    protected $disk = 'dropbox';

    protected $baseFolder = 'audio';

    protected $fillable = ['name', 'comments', 'language_id'];

    protected $events = [
        'deleting' => Deleting::class
    ];

    public static function upload(UploadedFile $file, $options)
    {
    	$audio = new Audio($options);

    	if($audio->saveFile($file)) {
            return $audio;
        } else {
            throw new Exception('File failed upload.');
        }
    }

    protected function getDirectory()
    {
    	$language = $this->language;

    	if(!$language) {
    		throw new Exception("Could not find a language with an ID of '$language_id'.");
    	}

    	return "{$this->baseFolder}/{$language->name}";
    }

    public function saveFile(UploadedFile $file)
    {
        $rc = false;
        $oldFile = $this->fileName;

    	$dir = $this->getDirectory();

    	$this->fileName = $file->store($dir, $this->disk);

        if($file->isValid()) {
            $this->save();

            if(strlen($oldFile) > 0) {
                event(new \App\Events\FileOrphaned($oldFile, $this->disk));
            }

            $rc = true;
        }

        return $rc;
    }

    public function getLinkAttribute()
    {
    	return $this->getLink();
    }

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function getLink()
    {
        $link = '';

    	try {
            $link = Storage::disk($this->disk)->url($this->fileName);
        } catch (\Exception $e) {}

        return $link;
    }

    public function present(string $method = 'name')
    {
        return new AudioPresenter($this, $method);
    }

    public function getDisk()
    {
        return $this->disk;
    }
}
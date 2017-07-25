<?php

namespace App;

use App\SubscribeableInterface;
use App\Traits\SubscribeableTrait;
use App\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model implements SubscribeableInterface
{
	use SubscribeableTrait;

	public $table = 'Tickets';

    protected $fillable = ['title', 'url', 'current', 'desired', 'comments'];

    public function getNameAttribute()
    {
    	return $this->title;
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    public function present(string $method = 'name')
    {
    	return new AlgPresenter($this, $method);
    }

    public function openedOn()
    {
        $time = '';

        if (!$this->closed) {
            $time = $this->getTime($this->created_at);
        }

        return $time;
    }

    public function closedOn()
    {
        $time = '';

        if ($this->isClosed) {
            $time = $this->getTime($this->updated_at);
        }

        return $time;
    }

    private function getTime($stamp)
    {
        return Carbon::parse($stamp)->setTimezone('America/Winnipeg')->toDayDateTimeString();
    }
}

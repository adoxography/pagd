<?php

namespace App;

use App\Traits\SubscribeableTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model implements SubscribeableInterface
{
    use SubscribeableTrait;

    public $table = 'Tickets';

    protected $fillable = ['title', 'url', 'current', 'desired', 'comments', 'isUrgent', 'ticketType_id'];

    public function getNameAttribute()
    {
        return $this->title;
    }

    public function openedBy()
    {
        return $this->belongsTo(User::class, 'openedBy_id');
    }

    public function closedBy()
    {
        return $this->belongsTo(User::class, 'closedBy_id');
    }

    public function type()
    {
        return $this->belongsTo(TicketType::class, 'ticketType_id');
    }

    public function present(string $method = 'name')
    {
        return new AlgPresenter($this, $method);
    }

    public function openedOn()
    {
        $time = '';

        if (!$this->isClosed()) {
            $time = $this->getTime($this->created_at);
        }

        return $time;
    }

    public function closedOn()
    {
        $time = '';

        if ($this->isClosed()) {
            $time = $this->getTime($this->updated_at);
        }

        return $time;
    }

    public function close(string $response, User $user)
    {
        $this->response = $response;
        $this->closedBy_id = $user->id;

        $this->save();
    }

    public function isClosed()
    {
        return isset($this->closedBy_id);
    }

    private function getTime($stamp)
    {
        return Carbon::parse($stamp)->setTimezone('America/Winnipeg')->toDayDateTimeString();
    }
}

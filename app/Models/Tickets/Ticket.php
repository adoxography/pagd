<?php

namespace App\Models\Tickets;

use App\Models\Users\User;
use App\Models\Tickets\Comment;
use App\Models\Tickets\TicketType;
use App\Presenters\AlgPresenter;
use App\Traits\Subscribeable;
use App\Interfaces\SubscribeableInterface;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model implements SubscribeableInterface
{
    use Subscribeable;

    public $table = 'Tickets';

    protected $fillable = ['title', 'url', 'current', 'desired', 'etc', 'isUrgent', 'ticketType_id'];

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
        return $this->getTime($this->created_at);
    }

    public function closedOn()
    {
        $time = '';

        if ($this->isClosed()) {
            $time = $this->getTime($this->closed_at);
        }

        return $time;
    }

    public function close(string $response, User $user)
    {
        $this->response = $response;
        $this->closed_at = Carbon::now();
        $this->closedBy_id = $user->id;

        $this->save();
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function isClosed()
    {
        return isset($this->closed_at);
    }

    private function getTime($stamp)
    {
        return Carbon::parse($stamp)->setTimezone('America/Winnipeg')->toDayDateTimeString();
    }
}

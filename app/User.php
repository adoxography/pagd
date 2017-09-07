<?php
namespace App;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Venturecraft\Revisionable\Revision;

class User extends Authenticatable
{
    use Notifiable, HasRoles;
    public $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstName', 'lastName', 'email', 'password', 'receiveSiteSummary', 'verificationCode'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getNameAttribute()
    {
        $name = $this->firstName;

        if ($this->lastName) {
            $name .= ' ' . $this->lastName;
        }

        return $name;
    }

    public function getLastLoginAttribute($value)
    {
        if ($value) {
            return Carbon::parse($value, 'UTC')->setTimezone('America/Winnipeg')->toDayDateTimeString();
        } else {
            return 'Never';
        }
    }

    public function revisions()
    {
        return $this->hasMany(Revision::class)->latest();
    }

    public function creations()
    {
        return $this->revisions()->where('key', 'created_at');
    }

    public function bookmarks($table = null, $returnRelation = false)
    {
        if (!$table) {
            throw new \Exception("Table \"$table\" does not exist.");
        }

        $relation = $this->morphedByMany($table, 'Bookmarkable')->withPivot('comment');

        if (!$returnRelation) {
            $relation = $relation->get();
        }

        return $relation;
    }

    public function present($method = 'name')
    {
        return new AlgPresenter($this, $method);
    }

    public function isSubscribedTo(SubscribeableInterface $subscription)
    {
        $subscribers = $subscription->subscribers->pluck('id');

        return $subscribers->contains($this->id);
    }
}

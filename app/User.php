<?php
namespace App;
use App\SubscribeableInterface;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
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
        'firstName', 'lastName', 'email', 'password', 'receiveSiteSummary',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function administrators(callable $closure = null)
    {
        $query = (static::class)::where('userRoles_id', 1);

        if (isset($closure)) {
            $closure($query);
        }

        return $query->get();
    }

    public function getNameAttribute()
    {
        $name = $this->firstName;

        if($this->lastName) {
            $name .= ' ' . $this->lastName;
        }

        return $name;
    }

    public function getLastLoginAttribute($value)
    {
        if($value) {
            return Carbon::parse($value, 'UTC')->setTimezone('America/Winnipeg')->toDayDateTimeString();
        } else {
            return 'Never';
        }
    }

    public function revisions()
    {
        return $this->hasMany('Venturecraft\Revisionable\Revision')->latest();
    }

    public function creations()
    {
        return $this->revisions()->where('key', 'created_at');
    }

    public function bookmarks($table = null, $returnRelation = false)
    {
        if(!$table) {
            throw new \Exception("Table \"$table\" does not exist.");
        }

        $relation = $this->morphedByMany($table, 'Bookmarkable')->withPivot('comment');

        if(!$returnRelation) {
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
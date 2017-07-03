<?php
namespace App;
use App\AlgPresenter;
use App\UserRole;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
class User extends Authenticatable
{
    use Notifiable;
    public $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstName', 'lastName', 'email', 'password', 'userRoles_id',
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
        if($table) {

            $relation = $this->morphedByMany($table, 'Bookmarkable')->withPivot('comment');

            if($returnRelation) {
                return $relation;
            } else {
                return $relation->get();
            }
        } else {

        }
    }

    public function type()
    {
        return $this->belongsTo(UserRole::class, 'userRoles_id', 'id');
    }

    public function permissions()
    {
        return $this->type();
    }

    public function renderLink()
    {
        return "<a href='/users/{$this->id}'>{$this->name}</a>";
    }

    public function present($method = 'name')
    {
        return new AlgPresenter($this, $method);
    }
}
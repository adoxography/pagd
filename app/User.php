<?php
namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\UserRole;
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
        'name', 'email', 'password',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function revisions()
    {
        return $this->hasMany('Venturecraft\Revisionable\Revision')->latest()->take(30);
    }

    public function bookmarks($table = null, $returnRelation = false)
    {
        if($table) {
            $class = '\\App\\'.ucfirst($table);

            $relation = $this->morphedByMany($class, 'Bookmarkable')->withPivot('comment');

            if($returnRelation) {
                return $relation;
            } else {
                return $relation->get();
            }
        } else {

        }
    }

    public function permissions()
    {
        return $this->belongsTo(UserRole::class, 'userRoles_id', 'id');
    }
}
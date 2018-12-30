<?php

namespace App\Http\Controllers;

use App\Models\Users\User;
use Auth;

class UserController extends Controller
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $users = User::orderBy('last_name')->get();

        return view('users.index', compact('users'));
    }

    public function show(User $user = null)
    {
        $user = $user ?: Auth::user();

        return view('users.show.basic', compact('user'));
    }

    public function edit(User $user)
    {
        if ($user->id != Auth::user()->id) {
            throw new \Exception('You are not allowed to modify someone else\s profile!');
        }

        return view('users.edit', compact('user'));
    }

    public function update(User $user)
    {
        $user->first_name = request()->first_name;
        $user->lastName = request()->lastName;
        $user->email = request()->email;

        $user->save();

        flash('Profile updated successfully.', 'is-success');

        return redirect('profile');
    }

    public function history(User $user)
    {
        $revisions = $user->revisions()->simplePaginate(100);

        return view('users.show.history', compact('user', 'revisions'));
    }

    public function bookmarks()
    {
        $user = Auth::user();
        return view('users.bookmarks', compact('user'));
    }

    public function unsubscribe(string $subscription)
    {
        switch ($subscription) {
            case 'site-summary':
                Auth::user()->update(['receiveSiteSummary' => false]);
                flash("You have been successfully unsubscribed.", 'is-success');
                break;

            default:
                # code...
                break;
        }

        return redirect('/');
    }
}

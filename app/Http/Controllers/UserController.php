<?php

namespace App\Http\Controllers;

use App\User;
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
        $users = User::orderBy('lastName')->get();

        return view('users.index', compact('users'));
    }

    public function show(User $user = null)
    {
        if(!$user->id) {
            $user = Auth::user();
        }

    	return view('users.show.basic', compact('user'));
    }

    public function edit(User $user)
    {
        if($user->id != Auth::user()->id) {
            throw new \Exception('You are not allowed to modify someone else\s profile!');
        }

        return view('users.edit', compact('user'));
    }

    public function update(User $user)
    {
        $user->firstName = request()->firstName;
        $user->lastName = request()->lastName;
        $user->email = request()->email;

        $user->save();

        flash('Profile updated successfully.', 'is-success');

        return redirect('profile');
    }

    public function history(User $user)
    {
        $user->load('revisions');

        return view('users.show.history', compact('user'));
    }

    public function bookmarks()
    {
        $user = Auth::user();
        return view('users.bookmarks', compact('user'));
    }
}

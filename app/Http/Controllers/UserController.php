<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

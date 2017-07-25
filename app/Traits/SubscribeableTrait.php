<?php

namespace App\Traits;

use App\Mail\TicketUpdated;
use App\User;
use Mail;

trait SubscribeableTrait
{
    public function subscribers()
    {
    	return $this->belongsToMany(User::class);
    }

    public function subscribe($user)
    {
    	if ($user instanceof User) {
    		$user = $user->id;
    	}

    	if (!is_integer($user)) {
    		throw new \Exception("Invalid parameter to subscribe.");
    	}

    	$this->subscribers()->attach($user);
    }

    public function unsubscribe($user)
    {
    	if ($user instanceof User) {
    		$user = $user->id;
    	}

    	if (!is_integer($user)) {
    		throw new \Exception("Invalid parameter to unsubscribe.");
    	}

    	$this->subscribers()->detach($user);
    }

    public function toggleSubscription($user)
    {
    	if ($user instanceof User) {
    		$user = $user->id;
    	}

    	if (!is_integer($user)) {
    		throw new \Exception("Invalid parameter to unsubscribe.");
    	}

    	$this->subscribers()->toggle([$user]);
    }

    public function removeSubscriptions()
    {
    	$this->subscribers()->detach();
    }

    public function notifySubscribers()
    {
    	foreach ($this->subscribers as $subscriber) {
    		Mail::to($subscriber)->send(new TicketUpdated($this, $subscriber));
    	}
    }
}
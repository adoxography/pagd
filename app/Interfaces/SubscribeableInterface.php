<?php

namespace App\Interfaces;

interface SubscribeableInterface
{
	public function subscribers();

	public function subscribe($user);
	public function unsubscribe($user);
	public function toggleSubscription($user);

	public function notifySubscribers();
	public function removeSubscriptions();
}

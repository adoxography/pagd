<?php namespace Acme\Mailers;

use App\User;

class ContactMailer extends Mailer{
	public function contact($subject, $data){

		$user = User::find(1);
		$view = 'emails.contact';

		$this->sendTo($user, $subject, $view, $data);
	}
}
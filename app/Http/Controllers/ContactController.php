<?php

namespace App\Http\Controllers;

use Acme\Mailers\ContactMailer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
	protected $mailer;

	public function __construct(ContactMailer $mailer){
		$this->mailer = $mailer;
	}

    public function index(){
    	return view('contact.index');
    }

    public function send(Request $request){
        // dd($request);
    	$subject = "Contact from algling.net: ".$request->subject;
    	$data = [
    		'body' => $request->body,
    		'from' => $request->from,
            'email' => $request->email
    	];

    	$this->mailer->contact($subject, $data);
    	flash("Message sent successfully!");
    	return redirect('/home');
    }
}

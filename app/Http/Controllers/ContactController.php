<?php

namespace App\Http\Controllers;

use App\User;
use App\Mail\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

/**
 * Controller for the contact email feature
 */
class ContactController extends Controller
{
    /**
     * Show contact page
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('contact.index');
    }

    /**
     * Send the message
     *
     * @return \Illuminate\Http\Response
     */
    public function send(Request $request)
    {
        $subject = "Contact from algling.net: ".$request->subject;

        $from  = $request->from;
        $email = $request->email;
        $body  = $request->body;

        Mail::to(User::find(1))->send(new Contact($from, $email, $body));

        flash("Message sent successfully!", 'is-success');
        return redirect('/home');
    }
}

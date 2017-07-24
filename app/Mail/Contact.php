<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    public $senderName;
    public $email;
    public $body;

    /**
     * Create a new message instance.
     *
     * @param $from
     * @param $email
     * @param $body
     */
    public function __construct($from, $email, $body)
    {
        $this->senderName  = $from;
        $this->email = $email;
        $this->body  = $body;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.contact');
    }
}

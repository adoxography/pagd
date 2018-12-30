@component('mail::message')
Hi {{ $user->first_name }},

Welcome to DALS! To get started, [log in](http://www.alglang.net/login) to your account. The menu for adding data will be on the upper right of the page. (You can also click [here](http://www.alglang.net/create) to go directly to the menu of add options.)

Most of the forms should be straightforward to use, but it's worth reading through the [contributor guide](http://www.alglang.net/guide) to familiarize yourself with some of the more obscure features of the site. If you come across anything confusing, let us know by opening a ticket (see below), and we'll be happy to add another article to the guide.

The site is still under active development, so you may come across the occasional bug or two. It would help us a lot if you could open a [support ticket](http://www.alglang.net/tickets/create) should that happen; this will let the developer know that there's a problem. Tickets marked as "urgent" (i.e. that interfere with the use of the site) are usually resolved within 24 hours, and non-urgent tickets are normally resolved within 48 hours.

Welcome to the team! We look forward to seeing your contributions.

-the team at DALS
@endcomponent

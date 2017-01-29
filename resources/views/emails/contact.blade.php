@component('mail::message')
# From
{{ $senderName or "--" }}

# Email
{{ $email or "--" }}

# Message

{{ $body }}

@endcomponent
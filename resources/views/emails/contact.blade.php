@component('mail::message')
# From
{{ $senderName ?? "--" }}

# Email
{{ $email ?? "--" }}

# Message

{{ $body }}

@endcomponent

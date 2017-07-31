@component('mail::message')
Hi {{ $user->firstName }},

Here is the activity summary for alglang.net over the past week:

#New data
@foreach ($data as $label => $arr)
@if (count($arr['newData']) > 0)
## New {{ $label }}: {{ count($arr['newData']) }}
@if (method_exists(array_first($arr['newData']), 'language'))
@component('mail::panel')
@foreach ($arr['newData'] as $item)
- {{ str_replace('&nbsp', ' ', (new App\MarkdownPresenter($item, 'link'))->then('language')) }}
@endforeach
@endcomponent
@else
@component('mail::panel')
@foreach ($arr['newData'] as $item)
- {{ new App\MarkdownPresenter($item, 'link') }}
@endforeach
@endcomponent
@endif
&nbsp;
@endif
@endforeach

#Totals
@foreach ($data as $label => $arr)
- {{ ucfirst($label) }}: {{ $arr['count'] }}
@endforeach

@slot('footer')
@component('mail::footer')
© 2017 {{ config('app.name') }}. All rights reserved.  
  
This email was sent because you are registered as a project leader on Alglang.net. If you no longer wish to receive these emails, [click here to unsubscribe](http://www.alglang.net/profile/unsubscribe/site-summary)
@endcomponent
@endslot
@endcomponent
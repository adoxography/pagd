@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            Product Name
        @endcomponent
    @endslot

    {{-- Body --}}
    {{ $slot }}

    {{-- Subcopy --}}
    @if (isset($subcopy))
        @slot('subcopy')
            @component('mail::subcopy')
                {{ $subcopy }}
            @endcomponent
        @endslot
    @endif

    {{-- Footer --}}
    @slot('footer')
        @isset($footer)
            {!! $footer !!}
        @else
            @component('mail::footer')
                © 2017 {{ config('app.name') }}. All rights reserved.
            @endcomponent
        @endisset
    @endslot
@endcomponent

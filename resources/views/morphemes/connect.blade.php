@extends('layout')

@section('title')
    Identify forms with&nbsp{!! $morpheme->present() !!}
@endsection

@section('content')
    @component('components.form', ['method' => 'PATCH', 'action' => "/morphemes/{$morpheme->id}/connect", 'visible' => true])
        <alg-select-all>
            <ul class="field">
                @foreach ($matches as $match)
                    <li class="field">
                        <label class="checkbox">
                            <input type="checkbox" name="matches[{{ $match->id }}]" value="{{ get_class($match) }}" />
                            {!! $match->present('link') !!}
                            {!! preg_replace('`<i>(' . str_replace(['*', '-'], '', $morpheme->name) . ')</i>`', '<strong>$1</strong>', $match->present()->as('morphemes', false)->__toString()) !!}
                        </label>
                    </li>
                @endforeach
            </ul>
        </alg-select-all>
    @endcomponent
@endsection

@extends('layout', ['Reflex search results'])

@section('title')
    Reflex search results
@endsection

@section('content')
    @component('components.form', ['method' => 'GET', 'action' => '/phonemes/search'])
        <input type="hidden" name="params" value="{{ $params or '' }}">
        <button class="button" type="submit">Refine</button>
    @endcomponent
    <br />

    <table class="table">
        <thead>
            <tr>
                <th>{!! $pa->present() !!}
                @foreach ($languages as $language)
                    <th>{!! $language->present() !!}
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach ($pa->phonology()->$type as $paPhoneme)
                <tr>
                    <td>{!! $paPhoneme->present('link') !!}</td>
                    @foreach ($languages as $language)
                        @php
                            $reflexes = $language->phonology()->$type->filter(function ($phoneme) use ($paPhoneme) {
                                return $phoneme->paParents->contains(function ($parent) use ($paPhoneme) {
                                    return $parent->id == $paPhoneme->id;
                                });
                            });
                        @endphp
                        <td>
                            @foreach ($reflexes as $reflex)
                                @if (!$loop->first)
                                    {{', '}}
                                @endif
                                {!! $reflex->present('link') !!}
                            @endforeach
                        </td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
    <em>See each phoneme page for conditioning and sources</em>
@endsection

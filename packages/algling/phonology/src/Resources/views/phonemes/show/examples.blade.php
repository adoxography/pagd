@extends('phon::phonemes.show')

@section('content')
    <div class="field">
        <span class="label">
            Examples
            @include('components.model.add-icon', ['uri' => "/phonemes/{$phoneme->id}/examples/create"])
        </span>
        @if ($phoneme->examples->count() > 0)
            <ul>
                @foreach ($phoneme->examples as $example)
                    <li>
                        {!! $example->present('link') !!} {{ $example->pivot->comments ? '('.$example->pivot->comments.')' : '' }}
                    </li>
                @endforeach
            </ul>
        @else
            None recorded yet
        @endif
    </div>
@endsection

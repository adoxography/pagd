@extends('morphemes.show')

@section('details')
<div class="details">
    {{--Language--}}
    <div class="detail-row">
        <label class="detail-label">Language</label>
        <div class="detail-value">{!! $morpheme->language->present('link') !!}</div>
    </div>

    {{--Gloss--}}
    <div class="detail-row">
        <label class="detail-label">Gloss</label>
        <div class="detail-value">
            {!! $morpheme->gloss->present('glosses', true) !!}
            {!! $morpheme->gloss->present('description') !!}
        </div>
    </div>

    {{--Slot--}}
    <div class="detail-row">
        <label class="detail-label">Slot</label>
        <div class="detail-value">
            {!! $morpheme->slot->present()->as('link', '', 'coloured') !!}
        </div>
    </div>

    {{--Phonemic representation--}}
    <div class="detail-row">
        <label class="detail-label">Phonemic representation</label>
        <div class="detail-value">{!! $morpheme->present('phonemicForm') !!}</div>
    </div>

    {{--Initial changes--}}
    @if ($morpheme->initialChanges->count() > 0)
        <div class="detail-row">
            <label class="detail-label">Initial change forms</label>
            <div class="detail-value">
                <ul>
                    @foreach ($morpheme->initialChanges as $change)
                    <li>{{ $change->change }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
    @endif

    {{--Allomorphy notes--}}
    @isset ($morpheme->allomorphy_notes)
    <div class="detail-row">
        <label class="detail-label">Allomorphy notes</label>
        <div class="detail-value">
            {!! replaceTags($morpheme->allomorphy_notes, $morpheme->language_id) !!}
        </div>
    </div>
    @endisset

    {{--Usage notes--}}
    @isset ($morpheme->usage_notes)
    <div class="detail-row">
        <label class="detail-label">Usage notes</label>
        <div class="detail-value">
            {!! replaceTags($morpheme->usage_notes, $morpheme->language_id) !!}
        </div>
    </div>
    @endisset

    {{--Parent--}}
    @isset ($morpheme->parent)
    <div class="detail-row">
        <label class="detail-label">Parent</label>
        <div class="detail-value">
            {!! $morpheme->parent->present()->as('unique', 'link')->then('language')->as('link', 'morphemes') !!}
        </div>
    </div>
    @endisset

    {{--Historical notes--}}
    @isset ($morpheme->historical_notes)
    <div class="detail-row">
        <label class="detail-label">Historical notes</label>
        <div class="detail-value">
            {!! replaceTags($morpheme->historical_notes, $morpheme->language_id) !!}
        </div>
    </div>
    @endisset

    {{--Private notes--}}
    @if (isset($morpheme->private_notes) && Auth::user() && Auth::user()->hasPermissionTo('add content'))
    <div class="detail-row">
        <label class="detail-label">Private notes</label>
        <div class="detail-value">
            {!! replaceTags($morpheme->private_notes, $morpheme->language_id) !!}
        </div>
    </div>
    @endif

    {{--Sources--}}
    @if ($morpheme->sources->count() > 0)
    <div class="detail-row">
        <label class="detail-label">Sources</label>
        <div class="detail-value">
            @foreach ($morpheme->sources as $source)
            <p>
                {!! $source->present('link') !!}
                @isset ($source->pivot->extra_info)
                : {{ $source->pivot->extra_info }}
                @endisset
            </p>
            @endforeach
        </div>
    </div>
    @endif
</div>
@endsection

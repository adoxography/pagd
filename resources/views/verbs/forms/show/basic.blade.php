@extends('verbs.forms.show')

@section('details')
<div class="details">
    {{-- Language --}}
    <div class="detail-row">
        <label class="detail-label">Language</label>
        <div class="detail-value">
            {!! $form->language->present('link') !!}
        </div>
    </div>

    <div class="detail-row">
        <label class="detail-label">Features</label>
        <div class="detail-value">{!! $form->structure->present()->then('modifiers') !!} (<a href="/verbs/search/paradigm/results?languages%5B%5D={{ $form->language->name }}&languages%5B%5D_id={{ $form->language_id }}&classes[]={{ $form->structure->class_id }}&subclasses[]={{ urlencode($form->structure->subclass) }}&orders[]={{ $form->structure->order_id }}&affirmative={{ $form->structure->isNegative ? '0' : '1' }}&negative={{ $form->structure->isNegative or '0' }}&diminutive={{ $form->structure->isDiminutive or '0' }}&modeSelect=selectModes&modes[]={{ $form->structure->mode_id }}">view paradigm</a>)</div>
    </div>
    <div class="detail-row">
        <label class="detail-label">Morphology</label>
        <div class="detail-value">
            {!! $form->present('phonemicForm') !!}
            {!! $form->present('morphemes') !!}
        </div>
    </div>
    <div class="detail-row">
        {{-- "Add another" link? --}}
        <label class="detail-label">Examples</label>
        <div class="detail-value">
            @if($form->examples->count() > 0)
            <ul>
                @foreach($form->examples as $example)
                <li>
                {!! $example->present('link') !!} {{ $example->translation }}
                </li>
                @endforeach
            </ul>
            @else
            None in the database
            @endif
        </div>
    </div>

    @isset($form->allomorphyNotes)
    <div class="detail-row">
        <label class="detail-label">Allomorphy</label>
        <div class="detail-value">
            {!! replaceTags($form->allomorphyNotes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    @isset($form->usageNotes)
    <div class="detail-row">
        <label class="detail-label">Usage notes</label>
        <div class="detail-value">
            {!! replaceTags($form->usageNotes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    <div class="detail-row">
        <label class="detail-label">Parent form</label>
        <div class="detail-value">
            @isset($form->parent)
            {!! $form->parent->present('link')->then('language', 'link') !!}
            @else
            Not recorded in the database
            @endisset
        </div>
    </div>

    @isset($form->historicalNotes)
    <div class="detail-row">
        <label class="detail-label">History</label>
        <div class="detail-value">
            {!! replaceTags($form->historicalNotes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    @isset($form->comments)
    <div class="detail-row">
        <label class="detail-label">Comments</label>
        <div class="detail-value">
            {!! replaceTags($form->historicalNotes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    @if(isset($form->privateNotes) && Auth::user() && Auth::user()->hasPermissionTo('add content'))
    <div class="detail-row">
        <label class="detail-label">Private notes</label>
        <div class="detail-value">
            {!! replaceTags($form->privateNotes, $form->language_id) !!}
        </div>
    </div>
    @endif

    @if($form->sources->count() > 0)
    <div class="detail-row">
        <label class="detail-label">Sources</label>
        <div class="detail-value">
            @foreach($form->sources as $source)
            <p>
                {!! $source->present('link') !!}@isset($source->pivot->extra_info): {{ $source->pivot->extra_info }}@endisset
            </p>
            @endforeach
        </div>
    </div>
    @endif
</div>
@endsection

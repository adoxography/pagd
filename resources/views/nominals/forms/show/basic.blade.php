@extends('nominals.forms.show')

@section('details')
<div class="details">
    {{-- Language --}}
    <div class="detail-row">
        <label class="detail-label">Language</label>
        <div class="detail-value">
            {!! $form->language->present('link') !!}
        </div>
    </div>

    {{-- Paradigm --}}
    <div class="detail-row">
        <label class="detail-label">Paradigm</label>
        <div class="detail-value">
            {!! $form->structure->paradigm->present('link') !!}
        </div>
    </div>

    {{-- Pronominal feature --}}
    @if($form->structure->pronominalFeature)
    <div class="detail-row">
        <label class="detail-label">Pronominal feature</label>
        <div class="detail-value">
            {!! $form->structure->pronominalFeature->present() !!}
        </div>
    </div>
    @endif

    {{-- Nominal feature --}}
    @if($form->structure->nominalFeature)
    <div class="detail-row">
        <label class="detail-label">Nominal feature</label>
        <div class="detail-value">
            {!! $form->structure->nominalFeature->present() !!}
        </div>
    </div>
    @endif

    {{-- Morphology --}}
    <div class="detail-row">
        <label class="detail-label">Morphology</label>
        <div class="detail-value">
            {!! $form->present('phonemicForm') !!}
            {!! $form->present('morphemes') !!}
        </div>
    </div>

    {{-- Examples --}}
    <div class="detail-row">
        @if($form->isStemless() && $form->examples->count() > 0)
        <label class="detail-label">Translation</label>
        <div class="detail-value">
            {{ $form->examples->first()->translation }}
        </div>
        @else
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
        @endif
    </div>

    {{-- Allomorphy --}}
    @isset($form->allomorphy_notes)
    <div class="detail-row">
        <label class="detail-label">Allomorphy</label>
        <div class="detail-value">
            {!! replaceTags($form->allomorphy_notes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    {{-- Usage --}}
    @isset($form->usage_notes)
    <div class="detail-row">
        <label class="detail-label">Usage notes</label>
        <div class="detail-value">
            {!! replaceTags($form->usage_notes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    {{-- Parent --}}
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

    {{-- History --}}
    @isset($form->historical_notes)
    <div class="detail-row">
        <label class="detail-label">History</label>
        <div class="detail-value">
            {!! replaceTags($form->historical_notes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    {{-- Private notes --}}
    @if(isset($form->private_notes) && Auth::user() && Auth::user()->hasPermissionTo('add content'))
    <div class="detail-row">
        <label class="detail-label">Private notes</label>
        <div class="detail-value">
            {!! replaceTags($form->private_notes, $form->language_id) !!}
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

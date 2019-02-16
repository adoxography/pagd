@extends('words.examples.show')

@section('details')
<div class="details">
    {{-- Language --}}
    <div class="detail-row">
        <label class="detail-label">Language</label>
        <div class="detail-value">
            {!! $example->language->present('link') !!}
        </div>
    </div>

    {{-- Form --}}
    @if($example->form)
    <div class="detail-row">
        <label class="detail-label">Form</label>
        <div class="detail-value">
            {!! $example->form->present('link') !!}
        </div>
    </div>
    @endif

    {{-- Phonology/Morphology --}}
    <div class="detail-row">
        <label class="detail-label">Morphology</label>
        <div class="detail-value">
            {!! $example->present('phonemicForm') !!}
            {!! $example->present('morphemes') !!}
        </div>
    </div>

    {{-- Translation --}}
    <div class="detail-row">
        <label class="detail-label">Translation</label>
        <div class="detail-value">
            "{{ $example->translation }}"
        </div>
    </div>

    {{-- Parent --}}
    <div class="detail-row">
        <label class="detail-label">Parent</label>
        <div class="detail-value">
            @if($example->parent)
            {{ $example->parent->present('link')->then('language')->as('link') }}
            @else
            Not recorded in the database
            @endif
        </div>
    </div>

    {{-- Public notes --}}
    @isset($form->public_notes)
    <div class="detail-row">
        <label class="detail-label">Notes</label>
        <div class="detail-value">
            {!! replaceTags($form->public_notes, $form->language_id) !!}
        </div>
    </div>
    @endisset

    {{-- Private notes --}}
    @if(Auth::user() && Auth::user()->hasPermissionTo('add content') && $example->private_notes)
    <div class="detail-row">
        <label class="detail-label">Private notes</label>
        <div class="detail-value">
            {!! replaceTags($form->private_notes, $form->language_id) !!}
        </div>
    </div>
    @endif

    {{-- Sources --}}
    @if($example->sources->count() > 0)
    <div class="detail-row">
        <label class="detail-label">Sources</label>
        <div class="detail-value">
            @foreach($example->sources as $source)
            <p>
                {!! $source->present('link') !!}@isset($source->pivot->extra_info): {{ $source->pivot->extra_info }}@endisset
            </p>
            @endforeach
        </div>
    </div>
    @endif
</div>
@endsection

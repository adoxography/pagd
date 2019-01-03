@extends('languages/show')

@section('details')
<div class="details">
    @isset($language->alternate_names)
    <div class="detail-row">
        <label class="detail-label">Also&nbsp;known&nbsp;as</label>
        <div class="detail-value">
            {{ $language->alternate_names }}
        </div>
    </div>
    @endisset

    @isset($language->parent)
    <div class="detail-row">
        <label class="detail-label">Parent</label>
        <div class="detail-value">
            {!! $language->parent->present('link') !!}
        </div>
    </div>
    @endisset

    <div class="detail-row">
        <label class="detail-label">Group</label>
        <div class="detail-value">
            {!! $language->group->present('link') !!}
        </div>
    </div>

    <div class="detail-row">
        <label class="detail-label">Algonquianist&nbsp;code</label>
        <div class="detail-value">
            {{ $language->algo_code }}
        </div>
    </div>

    @isset($language->iso)
    <div class="detail-row">
        <label class="detail-label">ISO&nbsp;code</label>
        <div class="detail-value">
            {{ $language->iso }}
        </div>
    </div>
    @endisset

    @if($language->children->count() > 0)
    <div class="detail-row">
        <label class="detail-label">Direct Children</label>
        <div class="detail-value">
            <ul>
                @foreach($language->children as $child)
                <li>{!! $child->present('link') !!}</li>
                @endforeach
            </ul>
        </div>
    </div>
    @endif

    @isset($language->notes)
    <div class="detail-row">
        <label class="detail-label">Description</label>
        <div class="detail-value">
            {!! replaceTags($language->notes, $language->id) !!}
        </div>
    </div>
    @endisset

    @isset($language->location)
    <div class="detail-row">
        <label class="detail-label">Location</label>
        <div class="detail-value">
            <em>(Centre of the area in which the language has most recently been spoken)</em>
            <alg-map :markers="{{ $language->toJson() }}"></alg-map>

        </div>
    </div>
    @endisset
</div>
@endsection

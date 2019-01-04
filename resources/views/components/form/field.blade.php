@php
$standalone = $standalone ?? false;
$label      = $label      ?? ucfirst(str_replace('_', ' ', $name));
@endphp

@if(!$standalone)
<div class="detail-row">
    <label class="detail-label" for="{{ $name}}-input">{{ $label }}</label>
    <div class="detail-value">
@else
    <label class="is-hidden-visual" for="{{ $name }}-input">{{ $label }}</label>
@endif

        @yield('outer-field')
        <b-field :type="{'is-danger': errors.has('{{ $name }}')}"
                 :message="errors.first('{{ $name }}')"
                 @if($standalone)
                 expanded
                 @endif
                 >
            @yield('inner-field')
        </b-field>

@if(!$standalone)
    </div>
</div>
@endif

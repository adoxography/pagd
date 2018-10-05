@php
    if (isset($paradigms)) {
        $data['Paradigm'] = $paradigms;
    }
@endphp

<alg-form-filter :filter-data="{{ $data->toJson() }}"
             uri="/nominals/forms/async"

             @isset($perPage)
                :per-page="{{ $perPage }}" 
             @endisset
            
             @isset($language_id)
                :language="{{ $language_id }}"
             @endisset

             @isset($morpheme_id)
                :morpheme="{{ $morpheme_id }}"
             @endisset

             @isset($source_id)
                :source="{{ $source_id }}"
             @endisset

             @isset($languages)
                :languages="{{ $languages->toJson() }}"
             @endisset

             @if ((!isset($showAddButtons) || !$showAddButtons) && Auth::user() && Auth::user()->hasPermissionTo('add content'))
                 :show-add-buttons="true"
             @endif
></alg-form-filter>

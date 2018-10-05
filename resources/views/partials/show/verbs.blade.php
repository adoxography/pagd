<alg-sandbox :filter-data="{{ $data->toJson() }}"
             uri="/verbs/forms/async"

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
></alg-sandbox>

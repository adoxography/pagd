@php
$modes = App\Models\Verbs\Mode::all();
$classes = App\Models\Verbs\VerbClass::all();
$orders = App\Models\Verbs\Order::all();
$features = App\Models\Verbs\Argument::all();
$nullableFeatures = collect([['name' => 'None', 'id' => 0]])->concat($features);

$data = collect([
    'Mode' => $modes,
    'Class' => $classes,
    'Order' => $orders,
    'Subject' => $features,
    'Primary Object' => $nullableFeatures,
    'Secondary Object' => $nullableFeatures
]);
@endphp

<alg-sandbox :filter-data="{{ $data->toJson() }}"

             @isset($perPage)
                :per-page="{{ $perPage }}" 
             @endisset
            
             @isset($language_id)
                :language="{{ $language_id }}"
             @endisset

             @isset($languages)
                :languages="{{ $languages->toJson() }}"
             @endisset
></alg-sandbox>

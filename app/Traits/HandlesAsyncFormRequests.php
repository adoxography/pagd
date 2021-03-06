<?php

namespace App\Traits;

use App\Models\Verbs\Example;

trait HandlesAsyncFormRequests {
    public function async() {
        $query = $this->asyncQuery();

        if (request()->language) {
            $query->where('language_id', request()->language);
        }

        if (request()->shape) {
            $shape = request()->shape;
            $shapeStr = "%$shape%";
            $query->where('name', 'LIKE', $shapeStr)
                  ->orWhereHas('examples', function ($query) use ($shapeStr) {
                      $query->where('name', 'LIKE', $shapeStr);
                  });
        }

        if (request()->morpheme) {
            $query->whereHas('morphemes', function ($query) {
                $query->where('Morph_Morphemes.id', request()->morpheme);
            })->orWhereHas('examples', function ($query) {
                $query->whereHas('morphemes', function ($query) {
                    $query->where('Morph_Morphemes.id', request()->morpheme);
                });
            });
        }

        if (request()->source) {
            $query->whereHas('sources', function ($query) {
                $query->where('Sources.id', request()->source);
            });
        }

        foreach ($this->asyncData as $field) {
            if (request()->$field) {
                $value = (int)(request()->$field);
                if ($value >= 0) {
                    $label = "{$field}_id";
                    $query->whereHas('structure', function ($query) use ($label, $value) {
                        if ($value == 0) {
                            $query->whereNull($label);
                        } else {
                            $query->where($label, $value);
                        }
                    });
                }
            }
        }

        $query->with(['examples' => function ($query) {
            if (request()->morpheme) {
                $query->whereHas('morphemes', function ($query) {
                    $query->where('Morph_Morphemes.id', request()->morpheme);
                });
            }

            if (request()->shape) {
                $shape = request()->shape;
                $shapeStr = "%$shape%";
                $query->where('name', 'LIKE', $shapeStr);
            }
        }]);

        $forms = $query->orderBy('name')->paginate(request()->perPage);
        return $forms->toJson();
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use App\Gloss;
use Illuminate\Database\QueryException;

class HandleGloss
{
    /**
         * Handle an incoming request.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  \Closure  $next
         * @return mixed
         */
        public function handle($request, Closure $next)
        {
            $text = $request->gloss_text;
            $id   = $request->gloss_id;
            $components;
            $gloss;
            $abv;
            $name;

            if (!$id && $text && preg_match("/.+\(.+\)/", $text)) {
                $components = explode('(', $text);

                $abv  = trim($components[0]);
                $name = trim(substr($components[1], 0, strlen($components[1]) - 1));

                if ($abv == 'V') {
                    $gloss = Gloss::select('id')
                                  ->where('abv', 'V')
                                  ->first();
                    $request['gloss_id']    = $gloss->id;
                    $request['gloss_text']  = $abv;
                    $request['translation'] = $name;
                } else {
                    $gloss = Gloss::select('id', 'name')
                    							->where('abv', $abv)
                                  ->first();

                    if ($gloss && $gloss->name == $name) {
                        $request['gloss_id']   = $gloss->id;
                        $request['gloss_text'] = $abv;
                    } else {
                        try {
                            $gloss = Gloss::create(['name' => $name, 'abv' => $abv]);

                            $request['gloss_id']   = $gloss->id;
                            $request['gloss_text'] = $abv;
                        } catch (QueryException $e) {
                        }
                    }
                }
            }

            return $next($request);
        }
}

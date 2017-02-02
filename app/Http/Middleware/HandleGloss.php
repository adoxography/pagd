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
        $text = $request->gloss;
        $id   = $request->gloss_id;
        $components;
        $gloss;
        $abv;
        $name;

        if(!$id && $text && preg_match("/.+\(.+\)/", $text)) {
            $components = explode('(', $text);

            $abv  = trim($components[0]);
            $name = substr($components[1], 0, strlen($components[1]) - 1);

            try {
                $gloss = Gloss::create(['name' => $name, 'abv' => $abv]);

                $request['gloss_id'] = $gloss->id;
                $request['gloss']    = $gloss->abv;
            }
            catch(QueryException $e) {
            }
        }

        return $next($request);
    }
}

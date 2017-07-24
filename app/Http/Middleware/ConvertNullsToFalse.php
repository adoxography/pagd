<?php

namespace App\Http\Middleware;

use Closure;

class ConvertNullsToFalse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param ...$fields
     * @return mixed
     */
    public function handle($request, Closure $next, ...$fields)
    {
        $newValues = [];

        foreach($fields as $field) {
            if(!$request->has($field) || !$request->$field) {
                $newValues[$field] = false;
            }
        }

        if(count($newValues) > 0) {
            $request->merge($newValues);
        }

        return $next($request);
    }
}

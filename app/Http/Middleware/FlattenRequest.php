<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Http\Middleware\TransformsRequest;

class FlattenRequest extends TransformsRequest
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
        $requestArray = $request->all();

        foreach($request->all() as $key => $value) {
            if(is_array($value)) {
                foreach($value as $subKey => $subValue) {
                    $requestArray["{$key}_{$subKey}"] = $subValue;
                }
            }
        }

        $request->replace($requestArray);

        Log::debug(['request after flattening' => $request->all()]);

        return $next($request);
    }
}

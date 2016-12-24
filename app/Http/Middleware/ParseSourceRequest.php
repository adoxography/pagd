<?php

namespace App\Http\Middleware;

use Closure;

class ParseSourceRequest
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
        $request['sourceData'] = $this->parseSources($request);

        return $next($request);
    }

    private function parseSources($request){
        $sources = $request->only([
            'source_id',
            'extraInfo'
        ]);

        return $sources;
    }
}

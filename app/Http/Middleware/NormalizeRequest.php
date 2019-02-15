<?php

namespace App\Http\Middleware;

use Closure;

class NormalizeRequest
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
        $data = [];

        foreach ($request->all() as $key => $value) {
            // The alg- prefix is just there to get browsers to stop trying to
            // fill in people's phone numbers. Get rid of it.
            if (preg_match('/^alg-/', $key)) {
                $key = substr($key, 4);
            }

            // ID fields can never be 0. They should be treated as null.
            if (preg_Match('/_id$/', $key) && $value === '0') {
                $value = null;
            }

            $data[$key] = $value;
        }

        $request->merge($data);
        return $next($request);
    }
}

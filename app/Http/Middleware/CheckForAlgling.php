<?php

namespace App\Http\Middleware;

use Closure;

class CheckForAlgling
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
        if(strpos(url()->current(), 'algling')) {
            flash('The domain algling.net is being deprecated in favour of <a href="http://www.alglang.net">alglang.net</a>. Please update your bookmarks.', 'is-danger');
        }

        return $next($request);
    }
}

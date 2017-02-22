<?php

namespace App\Http\Middleware;

use Closure;
use App\Form;
use App\Morpheme;
use Illuminate\Support\Facades\Log;

class AddSources
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $model)
    {
        Log::debug("Model is $model");
        $response = $next($request);
        $instantiatedModel;
        $id = $response->getContent();

        switch($model) {
            case '\App\Form':
                $instantiatedModel = $this->getForm($id);
                break;
            case '\App\Morpheme':
                $instantiatedModel = $this->getMorpheme($id);
                break;
            case '\App\Example':
                $instantiatedModel = $this->getExample($id);
                break;
            default:
                break;
        }
        $sources = $request->sources;

        $instantiatedModel->connectSources($sources);

        return $response;
    }

    protected function getForm($id)
    {
        return Form::find($id);
    }

    protected function getMorpheme($id)
    {
        return Morpheme::find($id);
    }

    protected function getExample($id)
    {
        return Example::find($id);
    }
}

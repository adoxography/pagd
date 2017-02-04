<?php

namespace App;

trait SourceableTrait {

    public function connectSources($sources)
    {
        if($sources) {
            $this->sources()->detach();

            foreach($sources as $source) {
                $this->sources()->attach($source['id'], ['extraInfo' => $source['extraInfo']]);
            }
        }
    }

}
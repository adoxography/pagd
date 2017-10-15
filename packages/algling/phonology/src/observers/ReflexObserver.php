<?php

namespace Algling\Phonology\Obervers;

use Algling\Phonology\Models\Reflex;

class ReflexObserver
{
    public function saved(Reflex $reflex)
    {
        $reflex->load('parent', 'reflex');

        $reflex->reflex->syncPaParents();
    }

    public function deleting(Reflex $reflex)
    {
        // $reflex->
    }
}

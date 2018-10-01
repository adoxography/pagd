<?php

namespace App\Obervers;

use App\Models\Phonology\Reflex;
use App\Queue;
use Illuminate\Support\Facades\DB;

class ReflexObserver
{
    public function saved(Reflex $reflex)
    {
        $reflex->load('parent', 'reflex');

        $reflex->reflex->syncPaParents();
    }

    public function deleting(Reflex $reflex)
    {
        $child = $reflex->reflex;

        $paParents = $child->paParents;
        $toDelete = collect();

        foreach ($paParents as $parent) {
            $found = false;
            $queue = new Queue;
            $queue->enqueue($parent);

            while (!$queue->isEmpty() && !$found) {
                $curr = $queue->dequeue();
                if ($curr->id == $child->id) {
                    $found = true;
                } else {
                    foreach ($curr->reflexes as $currReflex) {
                        if ($currReflex->pivot->id != $reflex->id) {
                            $queue->enqueue($currReflex);
                        }
                    }
                }
            }

            if (!$found) {
                $toDelete->push($parent);
            }
        }

        DB::table('Phon_PaParents')
            ->where('phoneme_id', $child->id)
            ->whereIn('parent_id', $toDelete->pluck('id'))
            ->delete();
    }
}

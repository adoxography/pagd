<?php

namespace Algling\Phonology;

use Algling\Phonology\Models\Phoneme;

class ReflexGraph
{
    public $focus;

    public $phonemes;

    public $links;

    public $languages;

    public function __construct(Phoneme $phoneme)
    {
        $this->focus = $phoneme;
        $this->phonemes = collect();
        $this->links = collect();

        $this->prepareFocus();
        $this->processParents();
        $this->processChildren();

        $this->extractLanguages();
        $this->colorize();
    }

    public function getData()
    {
        return ['nodes' => $this->phonemes, 'links' => $this->links];
    }

    protected function prepareFocus()
    {
        $this->focus->load('allParents', 'allChildren');
        $this->focus->_cssClass = 'focus';
    }

    protected function processParents()
    {
        $stack = collect([$this->focus]);

        while (!$stack->isEmpty()) {
            $curr = $stack->pop();

            foreach ($curr->allParents as $parent) {
                $stack->push($parent);
                $this->storeLink($parent, $curr, true);
            }

            $this->storePhoneme($curr);
        }
    }

    protected function processChildren()
    {
        $stack = collect([$this->focus]);

        while (!$stack->isEmpty()) {
            $curr = $stack->pop();

            foreach ($curr->allChildren as $child) {
                $stack->push($child);
                $this->storeLink($curr, $child, false);
            }

            $this->storePhoneme($curr);
        }
    }

    protected function extractLanguages()
    {
        $this->languages = $this->phonemes->pluck('language')->unique();
    }

    protected function colorize()
    {
        $palette = new \App\Palette\Palette;
        $map = $palette->map($this->languages);

        foreach ($this->phonemes as &$phoneme) {
            $phoneme['_color'] = $map[$phoneme['language_id']]->getHex();
        }

        foreach ($this->languages as &$language) {
            $language->color = $map[$language->id]->getHex();
        }
    }

    protected function storePhoneme(Phoneme $phoneme)
    {
        $phoneme = $this->formatPhoneme($phoneme);

        if (!$this->containsPhoneme($phoneme)) {
            $this->phonemes->push($phoneme);
        }
    }

    protected function formatPhoneme(Phoneme $phoneme)
    {
        $collection = collect($phoneme->toArray());
        $collection['name'] = "{$phoneme->language->algoCode} {$phoneme->name}";
        $collection['language'] = $phoneme->language;

        return $collection;
    }

    protected function containsPhoneme($newPhoneme)
    {
        return $this->phonemes->contains(function ($phoneme) use ($newPhoneme) {
            return $phoneme['id'] == $newPhoneme['id'];
        });
    }

    protected function storeLink(Phoneme $start, Phoneme $end, bool $reflexFromFirst)
    {
        if ($reflexFromFirst) {
            $reflex = $start->pivot;
        } else {
            $reflex = $end->pivot;
        }

        $this->links->push(['sid' => $start->id, 'tid' => $end->id, 'reflex' => $reflex]);
    }
}

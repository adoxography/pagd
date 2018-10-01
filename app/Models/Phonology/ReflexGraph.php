<?php

namespace App\Models\Phonology;

use App\Models\Phonology\Phoneme;

class ReflexGraph
{
    public $focus;

    public $phonemes;

    public $links;

    public $languages;

    protected $dictionary;

    public function __construct(Phoneme $phoneme)
    {
        $this->focus = $phoneme;
        $this->phonemes = collect();
        $this->links = collect();
        $this->dictionary = [];

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
        $this->focus->font = ['size' => 20];
    }

    protected function processParents()
    {
        $stack = collect([$this->focus]);

        while (!$stack->isEmpty()) {
            $curr = $stack->pop();

            foreach ($curr->allParents->sortBy('language_id') as $parent) {
                $stack->prepend($parent);
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

            foreach ($curr->allChildren->sortBy('language_id') as $child) {
                $stack->prepend($child);
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
        $palette = new \App\Palette\Palette('#FF8080');
        $map = $palette->map($this->languages);

        foreach ($this->phonemes as &$phoneme) {
            $phoneme['color'] = ['background' => '#' . $map[$phoneme['language_id']]->getHex()];
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
        $name = $phoneme->present();

        $collection = collect($phoneme->toArray());
        $collection['label']    = "{$phoneme->language->algoCode} $name";
        $collection['language'] = $phoneme->language;
        $collection['level']    = $phoneme->language->getDepth();
        $collection['id']       = $this->getNodeID($phoneme->id);
        $collection['title']    = "{$phoneme->language->name} $name";
        $collection['href']     = "/phonemes/{$phoneme->id}";

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

        $this->links->push([
            'id' => $reflex->id,
            'from' => $this->getNodeID($start->id),
            'to' => $this->getNodeID($end->id),
            'title' => "{$start->language->algoCode} {$start->present()} > {$end->language->algoCode} {$end->present()} / " . ($reflex->environment ?: 'elsewhere'),
            'href' => "/reflexes/{$reflex->id}"
        ]);
    }

    protected function getNodeID(int $phonemeID)
    {
        if (!isset($this->dictionary[$phonemeID])) {
            $this->dictionary[$phonemeID] = count($this->dictionary);
        }

        return $this->dictionary[$phonemeID];
    }
}

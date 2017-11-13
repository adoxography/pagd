<?php

namespace App\Palette;

use Illuminate\Support\Collection;

class Mapper
{
    public function map(Collection $collection, array $palette, string $key)
    {
        $map = [];

        foreach ($collection as $item) {
            $index = $this->getKey($item, $key);
            if (!isset($map[$index])) {
                $map[$index] = $palette[count($map)];
            }
        }

        return $map;
    }

    protected function getKey($item, $key)
    {
        if (strlen($key) > 0) {
            return $item->$key;
        }

        return $item;
    }
}

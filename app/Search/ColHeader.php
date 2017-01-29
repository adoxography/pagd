<?php

namespace App\Search;

class ColHeader
{
    private $language;
    private $order;
    private $mode;

    public function __construct($language, $order, $mode, $isNegative, $isDiminutive, $isAbsolute)
    {
        $this->language = $language;
        $this->order    = $order;
        $this->mode     = $mode;
        $this->isNegative   = $isNegative;
        $this->isDiminutive = $isDiminutive;
        $this->isAbsolute   = $isAbsolute;
    }

    public function toHTML()
    {
        return "<td><ul class='paradigm-header-y'>".
            "<li><a href='/languages/{$this->language->id}'>{$this->language->name}</a></li>" .
            "<li><a href='/orders/" . $this->order->id . "'>" . $this->order->name . "</a></li>" .
            "<li><a href='/mode/" . $this->mode->id . "'>" . $this->mode->name . "</a></li>" .
            ($this->isNegative ? "<li>Negative</li>" : "") .
            ($this->isDiminutive ? "<li>Diminutive</li>" : "") .
            (isset($this->isAbsolute) ? "<li>" . ($this->isAbsolute ? "Absolute" : "Objective") . "</li>" : "") .
        "</ul></td>";
    }

    public function compareTo(ColHeader $other)
    {
        $output = 0;

        if ($this->language->group->id < $other->language->group->id) {
            $output = -1;
        } elseif ($this->language->group->id > $other->language->group->id) {
            $output = 1;
        } else {
            $output = strcmp($this->language->name, $other->language->name);

            if ($output == 0) {
                $output = strcmp($this->order->name, $other->order->name);

                if ($output == 0) {
                    $output = strcmp($this->mode->name, $other->mode->name);

                    if ($output == 0) {
                        if ($this->isNegative && !$other->isNegative) {
                            $output = 1;
                        } elseif (!$this->isNegative && $other->isNegative) {
                            $output = -1;
                        } else {
                            if ($this->isDiminutive && !$other->isDiminutive) {
                                $output  = 1;
                            } elseif (!$this->isDiminutive && $other->isDiminutive) {
                                $output = -1;
                            } else {
                                $output = 0;
                            }
                        }
                    }
                }
            }
        }

        return $output;
    }
}

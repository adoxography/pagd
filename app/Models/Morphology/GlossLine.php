<?php

namespace App\Models\Morphology;

use App\Models\Morphology\Gloss;
use Illuminate\Support\Collection;

/**
 * Stores a gloss string and a list of known glosses as a list of gloss nodes and
 * converts them to HTML when requested.
 */
class GlossLine
{
    /**
     * The gloss nodes represented by the line
     *
     * @var Collection
     */
    protected $nodes;

    /**
     * The original string version of the line
     *
     * @var string
     */
    protected $repr;

    /**
     * Initializes the line
     *
     * @param string      The string version of the gloss line
     * @param Collection  A list of known glosses
     */
    public function __construct(string $repr, Collection $glosses)
    {
        $this->repr = $repr;
        $this->nodes = $this->buildNodes($repr, $glosses);
    }

    public function __toString() : string
    {
        return $this->repr;
    }

    /**
     * Builds the nodes for the line
     *
     * @param string      The string version of the gloss line
     * @param Collection  A list of known glosses
     */
    private function buildNodes(string $repr, Collection $dictionary)
    {
        $nodes = collect();
        $segments = explode('.', $repr);

        foreach ($segments as $segment) {
            if ($segment{0} === '"') {
                // If the gloss begins with a double quote, this is a translation
                // style gloss.
                $nodes[] = new TranslationTextGlossNode($segment);
            } else {
                // Look for the segment in the list of known glosses
                $lookup = $dictionary->where('abv', $segment)->first();

                if ($lookup) {
                    // If a gloss exists matching the text, use that gloss
                    $nodes[] = new ModelGlossNode($lookup);
                } else {
                    // Otherwise treat it as a gloss without a backing model
                    $nodes[] = new AbvTextGlossNode($segment);
                }
            }
        }

        return $nodes;
    }

    /**
     * Converts the line to HTML
     */
    public function present(string $method = 'glosses', $alert = false) : string
    {
        if ($method === 'glosses') {
            return $this->presentGlosses($alert);
        } elseif ($method === 'description') {
            return $this->presentDescription();
        }
    }

    /**
     * Converts the line into HTML representing the glosses
     */
    public function presentGlosses(bool $alert) : string
    {
        return $this->nodes->map(function ($node) use ($alert) {
            return $node->present('gloss', $alert);
        })->implode('.');
    }

    /**
     * Converts the line into HTML representing the gloss descriptions
     */
    public function presentDescription() : string
    {
        $description = $this->nodes->map(function ($node) {
            return $node->present('description');
        })->implode(' ');

        if (strlen(trim($description)) == 0) {
            return '';
        }

        return "($description)";
    }
}

/**
 * Base class for all gloss nodes
 */
abstract class GlossNode
{
    /**
     * @var string
     */
    protected $gloss;

    /**
     * @var string
     */
    protected $description;

    /**
     * Initializes the node
     *
     * @param string
     * @param string
     */
    public function __construct(string $gloss, string $description)
    {
        $this->gloss = $gloss;
        $this->description = $description;
    }

    /**
     * Presents the node as HTML
     *
     * @param string  The format to display the node in
     * @param bool    Whether to include an alert if the node is unknown
     * @return string
     */
    public function present(string $method, $alert = false) : string
    {
        if ($method === 'gloss') {
            return $this->prepareGloss($alert);
        } elseif ($method === 'description') {
            return $this->description;
        }

        throw new \Exception;
    }

    /**
     * Prepares a gloss for HTML
     *
     * @param bool
     * @return string
     */
    protected function prepareGloss(bool $alert) : string
    {
        return $this->gloss;
    }
}

/**
 * Gloss node backed by a model
 */
class ModelGlossNode extends GlossNode
{
    protected $model;

    /**
     * Initializes the node
     *
     * @param Model
     */
    public function __construct(Gloss $model)
    {
        $this->model = $model;
        parent::__construct($model->abv, $model->name);
    }

    /**
     * Prepares the gloss as HTML by adding a hyperlink
     *
     * @param bool
     * @return string
     */
    protected function prepareGloss(bool $alert) : string
    {
        return <<<HTML
<span class="gloss"><a href="/glosses/{$this->model->id}">{$this->gloss}</a></span>
HTML;
    }
}

/**
 * Base class for gloss nodes backed by a string
 */
abstract class TextGlossNode extends GlossNode
{
    public function __construct(string $text)
    {
        parent::__construct($text, '');
    }
}

/**
 * Gloss node representing a translation-style gloss
 */
class TranslationTextGlossNode extends TextGlossNode
{
    /**
     * Initializes the node, converting the text into a translation-gloss format
     * (no quotation marks, spaces replaced with periods).
     *
     * @param string
     */
    public function __construct(string $text)
    {
        $text = str_replace(['"', ' '], ['', '.'], $text);
        parent::__construct($text);
    }
}

/**
 * Gloss node representing an abbreviation style gloss, but not backed by a model
 */
class AbvTextGlossNode extends TextGlossNode
{
    /**
     * Prepares the gloss for HTML
     *
     * @param bool
     * @return string
     */
    public function prepareGloss(bool $alert) : string
    {
        $html = "<span class=\"gloss\">{$this->gloss}</span>";

        if ($alert) {
            $html .= <<<HTML
<alg-morpheme-alert title="Gloss missing" display="inline">
    <a href="/glosses/create?abv={$this->gloss}">
        Add <span class="gloss">{$this->gloss}</span>
    </a>
</alg-morpheme-alert>
HTML;
        }

        return $html;
    }
}

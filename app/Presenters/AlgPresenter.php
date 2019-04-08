<?php

namespace App\Presenters;

use App\Presenters\Presenter;
use App\Presenters\PresenterInterface;
use Illuminate\Support\Arr;

class AlgPresenter extends Presenter implements PresenterInterface
{
    public function __construct($model, string $method = 'name')
    {
        parent::__construct($model, $method);
    }

    public function name(string $format = '')
    {
        $output = $this->model->name;

        if (strlen($format) > 0) {
            $output = $this->format($output, $format);
        }

        return $output;
    }

    public function unique()
    {
        return $this->name();
    }

    /**
     * Get a link to the model's detail page
     *
     * @param string $addon more specific URI for the link, such as a specific show page
     * @param string $format the formatting to apply to the output
     * @return string
     */
    public function link(string $addon = '', string $format = '') : string
    {
        if (strlen($addon) > 0) {
            $addon = '/' . $addon;
        }

        $key = $this->model->getRouteKeyName();

        $uri = implode('/', array_filter([$this->getURI(), $this->model->$key, $addon]));
        $options = json_encode($this->prepareTooltipOptions());

        return <<<HTML
<a v-tooltip='$options' href="/$uri">{$this->model->present()}</a>
HTML;
    }

    /**
     * How the model should appear when called by a shortcut. Defaults to a link to the data.
     *
     * @return string
     */
    public function stub() : string
    {
        return $this->link();
    }

    /**
     * A short preview of the item in question
     *
     * @return string
     */
    public function preview() : string
    {
        return 'No summary available.';
    }

    /**
     * Generates the options for this element's preview tooltip
     *
     * @return array
     */
    protected function prepareTooltipOptions() : array
    {
        return [
            'content' => $this->preview(),
            'html' => true,
            'delay' => [
                'show' => 500,
                'hide' => 100
            ],
            'placement' => 'bottom',
            'classes' => ['preview'],
            'autoHide' => false
        ];
    }

    /**
     * Get the URI for accessing the model.
     *
     * @return string
     */
    protected function getURI() : string
    {
        return $this->model->uri ?: $this->generateURIFromModel();
    }

    /**
     * Guess the URI based on the model's table
     *
     * @return string
     */
    protected function generateURIFromModel() : string
    {
        $table = $this->model->getTable();

        $tableName = Arr::last(explode('_', $table));

        return strtolower($tableName);
    }

    protected function format(string $str, string $format) : string
    {
        if (strpos('bold', $format) !== false) {
            $str = sprintf('<strong>%s</strong>', $str);
        }

        if (strpos('highlight', $format) !== false) {
            $str = sprintf('<span style="margin-left: .25rem;" class="alg-highlight">%s</span>', $str);
        }

        return $str;
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AlgPresenter extends Presenter implements PresenterInterface
{
    public function __construct(Model $model, string $method = 'name')
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
    public function link(string $addon = '', string $format = '')
    {
        if (strlen($addon) > 0) {
            $addon = '/' . $addon;
        }

        return sprintf(
            '<a href="/%s/%d%s">%s</a>',
            $this->getURI(),
            $this->model->id,
            $addon,
            $this->model->present()
        );
    }

    /**
     * How the model should appear when called by a shortcut. Defaults to a link to the data.
     *
     * @return string
     */
    public function stub()
    {
        return $this->link();
    }

    /**
     * Get the URI for accessing the model.
     *
     * @return string
     */
    protected function getURI()
    {
        if (isset($this->uri)) {
            return $this->uri;
        }

        return $this->generateURIFromModel();
    }

    /**
     * Guess the URI based on the model's table
     *
     * @return string
     */
    protected function generateURIFromModel()
    {
        $table = $this->model->getTable();

        $tableName = array_last(explode('_', $table));

        return strtolower($tableName);
    }

    protected function format(string $str, string $format)
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

<?php

namespace App;

use App\Exceptions\PresenterException;
use Illuminate\Database\Eloquent\Model;

abstract class Presenter
{
    protected $model;

    protected $method;

    protected $arguments = [];

    protected $before = [];

    protected $then = [];

    protected $lastWasBefore = false;

    public function __construct(Model $model, string $method)
    {
        $this->model = $model;
        $this->method = $method;
    }

    public function with(string $relation, string $method = 'name', $before = false)
    {
        if ($before) {
            return $this->before($relation, $method);
        } else {
            return $this->then($relation, $method);
        }
    }

    /**
     * Add a relation's presenter before the current one
     *
     * @param string $relation
     * @param string $method
     * @param array ...$arguments the arguments to pass in to the presentation method
     * @return Presenter
     * @throws \Exception
     * @internal param the $string name of the relation
     * @internal param the $string presentation method to use with the relation
     */
    public function before(string $relation, string $method = 'name', ...$arguments)
    {
        $relation = $this->getRelated($relation);

        if (is_string($relation)) {
            $this->before[] = $relation;
        } elseif (method_exists($relation, 'present')) {
            $this->before[] = $relation->present()->as($method)
                            ->setArguments($arguments);
        }

        $this->lastWasBefore = true;

        return $this;
    }

    /**
     * Add a relation's presenter after the current one
     *
     * @param string $relation the name of the relation
     * @param string $method the presentation method to use with the relation
     * @param array ...$arguments the arguments to pass in to the presentation method
     * @return Presenter
     * @throws \Exception
     */
    public function then(string $relation, string $method = 'name', ...$arguments)
    {
        $related = $this->getRelated($relation);

        if (is_string($related)) {
            $this->then[] = $related;
        } elseif (method_exists($related, 'present')) {
            $this->then[] = $related->present()->as($method)
                            ->setArguments($arguments);
        } else {
            throw new PresenterException(
                sprintf(
                    '"%s" is not a string and does not have a present method. It is a %s.',
                    $relation,
                    get_class($relation)
                ),
                $this
            );
        }

        $this->lastWasBefore = false;

        return $this;
    }

    /**
     * Set the presentation method of the last model added
     *
     * @param string $method the name of the presentation method
     * @param array ...$arguments the arguments to use with the presentation method
     *
     * @return \App\Presenter
     */
    public function as(string $method, ...$arguments)
    {
        $with = $this->getLastArray();

        // If there are no subsequent presenters set, assume the method is to be used on this presenter
        if (count($with) == 0) {
            $this->method = $method;
            $this->setArguments($arguments);
        } else {
            // Otherwise, set the method on the last presenter entered
            array_last($with)->as($method)
                ->setArguments($arguments);
        }

        return $this;
    }

    public function setMethod($method)
    {
        $this->method = $method;

        return $this;
    }

    /**
     * Set the arguments for this presenter
     *
     * @param array|null The arguments
     *
     * @return \App\Presenter
     */
    public function setArguments($arguments)
    {
        if (!is_array($arguments)) {
            $arguments = [$arguments];
        }

        $this->arguments = $arguments;

        return $this;
    }

    /**
     * Allow for Laravel-style method calls
     *
     * @param string $property the name of the property to access
     * @return mixed
     * @throws \Exception
     */
    public function __get($property)
    {
        if (method_exists($this, $property)) {
            return call_user_func([$this, $property]);
        }

        throw new PresenterException(
            sprintf('%s does not respond to the "%s" property.', static::class, $property),
            $this
        );
    }

    /**
     * Call the method on the model, then print the items in the before and then arrays
     *
     * @return string
     */
    public function __toString()
    {
        $output = '';

        foreach ($this->before as $item) {
            $output .= $item . '&nbsp';
        }

        $output .= call_user_func_array([$this, $this->method], $this->arguments);

        foreach ($this->then as $item) {
            $output .= sprintf('&nbsp(%s)', $item);
        }

        return $output;
    }

    protected function getLastArray()
    {
        if ($this->lastWasBefore) {
            return $this->before;
        } else {
            return $this->then;
        }
    }

    public function dd()
    {
        dd($this);
    }

    protected function getRelated(string $relation)
    {
        if (!method_exists($this->model, $relation)) {
            throw new PresenterException(sprintf('%s does not respond to "%s".', $this->model, $relation), $this);
        }

        return $this->model->$relation;
    }
}

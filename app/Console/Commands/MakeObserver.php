<?php

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class MakeObserver extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:observer {name : the name of the class}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make a new observer class for a model';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Observer';

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub() : string
    {
        return __DIR__.'/stubs/observer.stub';
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace.'\Observers';
    }

    /**
     * Replace the namespace for the given stub.
     *
     * @param  string  $stub
     * @param  string  $name
     * @return $this
     */
    protected function replaceNamespace(&$stub, $name)
    {
        parent::replaceNamespace($stub, $name);

        $stub = str_replace('DummyModelClass', $this->getModelClass($this->getNameInput()), $stub);

        return $this;
    }

    protected function getModelClass($name)
    {
        return str_replace('Observer', '', $name);
    }
}

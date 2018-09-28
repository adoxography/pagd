<?php

namespace Algling\Phonology\Http\Controllers;

use App\Http\Controllers\Controller;

class PhonemeDataController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:developer|leader']);
    }

    public function store(string $type)
    {
        $data = request()->validate(['name' => 'required']);
        $class = $this->getClass($type);
        $class::create($data);
        return back();
    }

    public function destroy(string $type, int $id)
    {
        $class = $this->getClass($type);
        $class::destroy($id);
        return back();
    }

    protected function getClass(string $name)
    {
        $baseName = ucfirst(camel_case(str_singular($name)));
        return 'Algling\\Phonology\\Models\\' . $baseName;
    }
}

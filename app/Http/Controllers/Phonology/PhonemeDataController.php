<?php

namespace App\Http\Controllers\Phonology;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

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
        $baseName = ucfirst(Str::camel(Str::singular($name)));
        return 'App\\Models\\Phonology\\' . $baseName;
    }
}

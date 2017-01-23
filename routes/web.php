<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
Route::get('sandbox',  'SandboxController@index');
Route::post('sandbox', 'SandboxController@store');

Route::get('',     'HomeController@index');
Route::get('home', 'HomeController@index');

Route::post('backup', 'BackupController@store');

Route::get('contact',  'ContactController@index');
Route::post('contact', 'ContactController@send');

// Route::get('search',          'SearchController@index');
// Route::post('search',         'SearchController@search');
// Route::get('search/paradigm', 'SearchController@paradigm');
// Route::get('search/form',     'SearchController@form');

Route::get('autocomplete',                 'AutocompleteController@test');
Route::get('autocomplete/forms',           'AutocompleteController@forms');
Route::get('autocomplete/formParents',     'AutocompleteController@formParents');
Route::get('autocomplete/morphemes',       'AutocompleteController@morphemes');
Route::get('autocomplete/morphemeParents', 'AutocompleteController@morphemeParents');
Route::get('autocomplete/sources',         'AutocompleteController@sources');

Route::get('sources/ajax', 'SourceController@store');

Route::get('morphemes/confirm-delete', 'MorphemeController@confirmDelete');

Route::resource('classes',   'ClassController');
Route::resource('glosses',   'GlossController');
Route::resource('examples',  'ExampleController');
Route::resource('forms',     'FormController');
Route::resource('groups',    'GroupController');
Route::resource('languages', 'LanguageController');
Route::resource('modes',     'ModeController');
Route::resource('morphemes', 'MorphemeController');
Route::resource('orders',    'OrderController');
Route::resource('slots',     'SlotController');
Route::resource('sources',   'SourceController');

Route::get('forms/{form}/addExample', 'FormController@addExample');

Route::get('groups/{group}/addLanguage', 'GroupController@addLanguage');

Route::get('languages/{language}/addChild',    'LanguageController@addChild');
Route::get('languages/{language}/addForm',     'LanguageController@addForm');
Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');

Auth::routes();

Route::get('/{file}', function ($file) {
    if (File::exists("/home/protected/laravel/resources/views/etc/$file.php")) {
        $page = "etc.$file";
        return view('etc', compact(['page']));
    } else {
        App::abort(404);
    }
});

Route::get('/{folder}/{file}', function ($folder, $file) {
    if (File::exists("/home/protected/laravel/resources/views/etc/$folder/$file.php")) {
        $page = "etc.$folder.$file";
        return view('etc', compact(['page']));
    } else {
        App::abort(404);
    }
});

Route::get('/{folder1}/{folder2}/{file}', function ($folder1, $folder2, $file) {
    if (File::exists("/home/protected/laravel/resources/views/etc/$folder1/$folder2/$file.php")) {
        $page = "etc.$folder1.$folder2.$file";
        return view('etc', compact(['page']));
    } else {
        App::abort(404);
    }
});

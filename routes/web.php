<?php

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
Route::get('sandbox', 'SandboxController@index');
Route::post('sandbox', 'SandboxController@store');
Route::get('', 'HomeController@index');
Route::get('home', 'HomeController@index');

Route::get('search', 'SearchController@index');
Route::post('search', 'SearchController@search');
Route::get('glossary', 'GlossaryController@index');
Route::get('glossary/{model}', 'GlossaryController@show');

Route::get('autocomplete', 'AutocompleteController@autocomplete');
Route::get('autocomplete/groups', 'AutocompleteController@groups');
Route::get('autocomplete/languages/', 'AutocompleteController@languages');

Route::get('forms/autofill', 'FormController@autofill');

Route::get('morphemes/autofill', 'MorphemeController@autofill');
Route::get('morphemes/multi', 'MorphemeController@createMulti');
Route::post('morphemes/multi', 'MorphemeController@storeMulti');

Route::resource('examples',  'ExampleController');
Route::resource('forms',     'FormController');
Route::resource('groups',    'GroupController');
Route::resource('languages', 'LanguageController');
Route::resource('morphemes', 'MorphemeController');

Route::get('languages/{language}/addChild',    'LanguageController@addChild');
Route::get('languages/{language}/addForm',     'LanguageController@addForm');
Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');

Auth::routes();

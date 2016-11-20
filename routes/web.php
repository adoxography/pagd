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

Route::get('autocomplete', 'AutocompleteController@autocomplete');
Route::get('autocomplete/groups', 'AutocompleteController@groups');
Route::get('autocomplete/languages/', 'AutocompleteController@languages');

Route::get('forms/autofill', 'FormController@autofill');

Route::get('morphemes/autofill', 'MorphemeController@autofill');

Route::resource('examples', 'ExampleController');
Route::resource('forms', 'FormController');
Route::resource('groups', 'GroupController');
Route::resource('languages', 'LanguageController');
Route::resource('morphemes', 'MorphemeController');

Route::get('languages/{language}/addChild',    'LanguageController@addChild');
Route::get('languages/{language}/addForm',     'LanguageController@addForm');
Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');

Route::delete('classes/{class}', 'ClassController@destroy');
Route::get('classes',            'ClassController@index');
Route::get('classes/create',     'ClassController@create');
Route::get('classes/{class}',    'ClassController@show');
Route::post('classes',           'ClassController@insert');

//Closed Classes
Route::delete('glosses/{gloss}', 'GlossController@destroy');
Route::get('glosses',            'GlossController@index');
Route::get('glosses/create',     'GlossController@create');
Route::get('glosses/{gloss}',    'GlossController@show');
Route::post('glosses',           'GlossController@insert');

Route::delete('slots/{slot}', 'SlotController@destroy');
Route::get('slots',           'SlotController@index');
Route::get('slots/create',    'SlotController@create');
Route::get('slots/{slot}',    'SlotController@show');
Route::post('slots',          'SlotController@insert');

Auth::routes();

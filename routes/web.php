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
Route::get('sandbox', 'BackupController@store');

Route::get('', 'HomeController@index');
Route::get('home', 'HomeController@index');

Route::post('backup', 'BackupController@store');

Route::get('contact', 'ContactController@index');
Route::post('contact', 'ContactController@send');

Route::get('search', 'SearchController@index');
Route::post('search', 'SearchController@search');

Route::get('autocomplete',                 'AutocompleteController@test');
Route::get('autocomplete/forms',           'AutocompleteController@forms');
Route::get('autocomplete/formParents',     'AutocompleteController@formParents');
Route::get('autocomplete/morphemes',       'AutocompleteController@morphemes');
Route::get('autocomplete/morphemeParents', 'AutocompleteController@morphemeParents');
Route::get('autocomplete/sources',         'AutocompleteController@sources');

Route::get('morphemes/exists', 'MorphemeController@exists');
Route::post('morphemes/createOTG', 'MorphemeController@createOTG');
Route::get('morphemes/multi', 'MorphemeController@createMulti');
Route::post('morphemes/multi', 'MorphemeController@storeMulti');

Route::get('sources/ajax', 'SourceController@store');

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

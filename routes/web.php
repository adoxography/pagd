<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is which defines all of the routes that are handled by the
| application.
|
*/

Route::get('',     'HomeController@index');
Route::get('home', 'HomeController@index');
Route::get('glossary', function() { return view('glossary.index'); });

Route::post('backup', 'BackupController@store');

// Contact Routes
Route::get('contact',  'ContactController@index');
Route::post('contact', 'ContactController@send');

// Search Routes
Route::get('search',          'SearchController@index');
Route::get('search/paradigm', 'SearchController@paradigm');
Route::get('search/form',     'SearchController@form');

// Autocomplete Routes
Route::get('autocomplete',                 'AutocompleteController@test');
Route::get('autocomplete/forms',           'AutocompleteController@forms');
Route::get('autocomplete/formParents',     'AutocompleteController@formParents');
Route::get('autocomplete/morphemes',       'AutocompleteController@morphemes');
Route::get('autocomplete/morphemeParents', 'AutocompleteController@morphemeParents');
Route::get('autocomplete/sources',         'AutocompleteController@sources');

Route::get('log', 'LogController@index');
Route::post('sources/ajax', 'SourceController@store');

//Route::resource('classes',   'ClassController');

Route::resource('glosses',   'GlossController');

// Example Routes
Route::resource('examples',                     'ExampleController');
Route::patch('examples/{example}/disambiguate', 'ExampleController@disambiguate');

// Form Routes
Route::get('forms/need-attention',        'FormController@incompleteForms');
Route::resource('forms',                  'FormController');
Route::get('forms/{form}/addExample',     'FormController@addExample');
Route::patch('forms/{form}/disambiguate', 'FormController@disambiguate');

// Group Routes
Route::resource('groups',    'GroupController');

// Language Routes
Route::resource('languages',                   'LanguageController');
Route::get('languages/{language}/addChild',    'LanguageController@addChild');
Route::get('languages/{language}/addExample',  'LanguageController@addExample');
Route::get('languages/{language}/addForm',     'LanguageController@addForm');
Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');
Route::get('languages/{language}/addRule',     'LanguageController@addRule');

// Morpheme Routes
Route::resource('morphemes', 'MorphemeController');

// Rule routes
Route::resource('rules', 'RuleController');

Route::resource('slots',     'SlotController');

Route::resource('sources',   'SourceController');

Auth::routes();
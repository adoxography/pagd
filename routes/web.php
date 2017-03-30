<?php

use Illuminate\Http\Request;
use App\Contracts\Search;

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
Route::get('entire-paradigm', 'HomeController@entireParadigm');
Route::get('changelog', 'HomeController@changelog');
Route::get('about', 'HomeController@about');

Route::get('new-morphemes', function() {

    $added = [];
    $morphemes = [];
    $revisions = \Venturecraft\Revisionable\Revision::where('id', '>', 1209)->where('revisionable_type', 'App\\Morpheme')->get();

    foreach($revisions as $revision) {
        if(!in_array($revision->revisionable_id, $added)) {
            $added[] = $revision->revisionable_id;
            $morphemes[] = \App\Morpheme::find($revision->revisionable_id);
        }
    }

    return view('new-morphemes', compact('morphemes'));
});

Route::post('backup', 'BackupController@store');

Route::post('bookmark/{model}/{id}', 'BookmarkController@bookmark');
Route::delete('bookmark/{model}/{id}', 'BookmarkController@unbookmark');
Route::get('profile/bookmarks', 'UserController@bookmarks');

// Contact Routes
Route::get('contact',  'ContactController@index');
Route::post('contact', 'ContactController@send');

// Search Routes
Route::get('search',          'SearchController@index');
Route::get('search/general',  'SearchController@general');
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

// Initial Change routes
Route::get('changes', 'InitialChangeController@index');
Route::post('changes', 'InitialChangeController@store');
Route::delete('changes/{change}', 'InitialChangeController@destroy');

Route::resource('glosses',           'GlossController');
Route::patch('glosses/{gloss}/hide', 'GlossController@hide');

// Example Routes
Route::resource('examples',                     'ExampleController');
Route::patch('examples/{example}/disambiguate', 'ExampleController@disambiguate');
Route::patch('examples/{example}/hide',         'ExampleController@hide');

// Form Routes
Route::get('empty-forms/{emptyform}',        'EmptyFormController@show');
Route::delete('empty-forms/{emptyform}',     'EmptyFormController@destroy');
Route::patch('empty-forms/{emptyform}',      'EmptyFormController@update');
Route::get('empty-forms/{emptyform}/edit',   'EmptyFormController@edit');
Route::patch('empty-forms/{emptyform}/hide', 'EmptyFormController@hide');
Route::get('forms/need-attention',        'FormController@incompleteForms');
Route::resource('forms',                  'FormController');
Route::get('forms/{form}/addExample',     'FormController@addExample');
Route::patch('forms/{form}/disambiguate', 'FormController@disambiguate');
Route::patch('forms/{form}/hide',         'FormController@hide');

// Group Routes
Route::resource('groups',           'GroupController');
Route::patch('groups/{group}/hide', 'GroupController@hide');

// Language Routes
Route::get('languages/order',                  'LanguageController@order');
Route::post('languages/order',                 'LanguageController@storeOrder');
Route::resource('languages',                   'LanguageController');
Route::get('languages/{language}/addChild',    'LanguageController@addChild');
Route::get('languages/{language}/addExample',  'LanguageController@addExample');
Route::get('languages/{language}/addForm',     'LanguageController@addForm');
Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');
Route::get('languages/{language}/addRule',     'LanguageController@addRule');
Route::patch('languages/{language}/hide',      'LanguageController@hide');

// Morpheme Routes
Route::resource('morphemes',              'MorphemeController');
Route::patch('morphemes/{morpheme}/hide', 'MorphemeController@hide');

// Rule routes
Route::resource('rules',          'RuleController');
Route::patch('rules/{rule}/hide', 'RuleController@hide');

Route::resource('slots',          'SlotController');
Route::patch('slots/{slot}/hide', 'SlotController@hide');

Route::resource('sources',            'SourceController');
Route::patch('sources/{source}/hide', 'SourceController@hide');

Route::get('profile', 'UserController@show');
Auth::routes();
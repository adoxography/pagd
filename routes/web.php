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
Route::get('welcome', 'HomeController@index');

Route::get('glossary', 'HomeController@glossary');
Route::get('entire-paradigm', 'HomeController@entireParadigm');
Route::get('changelog', 'HomeController@changelog');

Route::get('sandbox', function() {
	$language = 23;

	$query = \Algling\Words\Models\Example::whereHas('form', function($subquery) use ($language) {
		$subquery->where('language_id', $language);
	});

	return $query->get();
});
Route::get('need-attention',        'HomeController@incompleteForms');
Route::get('guide', 'HomeController@guide');

Route::post('backup', 'BackupController@store');

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

// Group Routes
Route::resource('groups',           'GroupController');
Route::patch('groups/{group}/hide', 'GroupController@hide');

// Language Routes
Route::group(['as' => 'languages::'], function() {
	Route::get('languages/order',                  'LanguageController@order');
	Route::post('languages/order',                 'LanguageController@storeOrder');
	Route::resource('languages',                   'LanguageController');
	Route::get('languages/{language}/addChild',    'LanguageController@addChild');
	Route::get('languages/{language}/addExample',  'LanguageController@addExample');
	Route::get('languages/{language}/addVerbForm', 'LanguageController@addVerbForm');
	Route::get('languages/{language}/addNominalForm', 'LanguageController@addNominalForm');
	Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');
	Route::get('languages/{language}/addRule',     'LanguageController@addRule');
	Route::get('languages/{language}/addParadigm',     'LanguageController@addParadigm');
	Route::patch('languages/{language}/hide',      'LanguageController@hide');

	Route::get('languages/{language}/basic',     'LanguageShowController@basicDetails')->name('showBasic');
	Route::get('languages/{language}/survey',    'LanguageShowController@survey')->name('showSurvey');
	Route::get('languages/{language}/verbs',     'LanguageShowController@verbs')->name('showVerbs');
	Route::get('languages/{language}/nominals',  'LanguageShowController@nominals')->name('showNominals');
	Route::get('languages/{language}/morphemes', 'LanguageShowController@morphemes')->name('showMorphemes');
	Route::get('languages/{language}/paradigms', 'LanguageShowController@paradigms')->name('showParadigms');
	Route::get('languages/{language}/phonemes',  'LanguageShowController@phonemes')->name('showPhonemes');
	Route::get('languages/{language}/clusters',  'LanguageShowController@clusters')->name('showClusters');
	Route::get('languages/{language}/rules',     'LanguageShowController@rules')->name('showRules');
	Route::get('languages/{language}/sources',   'LanguageShowController@sources')->name('showSources');
	Route::get('languages/{language}/log',       'LanguageShowController@log')->name('showLog');
});

// Rule routes
Route::resource('rules',          'RuleController');
Route::patch('rules/{rule}/hide', 'RuleController@hide');
Route::post('rules/{rule}/bookmark', 'RuleController@bookmark');

Route::group(['as' => 'sources::'], function() {
	Route::resource('sources', 'SourceController');

	Route::get('sources/{source}/basic', 'SourceShowController@basicDetails')->name('showBasic');
	Route::get('sources/{source}/forms', 'SourceShowController@forms')->name('showForms');
	Route::get('sources/{source}/morphemes', 'SourceShowController@morphemes')->name('showMorphemes');
});

Route::get('users', 'UserController@index');

Route::group(['as' => 'users::'], function() {
	Route::get('profile', 'UserController@show')->name('profile');
	Route::get('users/{user}', 'UserController@show')->name('show');
	Route::get('users/{user}/history', 'UserController@history')->name('showHistory');
});

Auth::routes();

Route::get('{args}', 'PageController@show')->where('args', '.*');
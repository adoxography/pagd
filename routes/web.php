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
Route::resource('tickets', 'TicketController');
Route::get('tickets/{ticket}/subscribe', 'TicketController@subscribe');
Route::get('tickets/{ticket}/respond', 'TicketController@respond');
Route::post('tickets/{ticket}/respond', 'TicketController@updateResponse');
Route::post('tickets/{ticket}/comment', 'CommentController@create');

Route::view('create', 'create');
Route::view('search', 'search');

Route::get('', 'HomeController@index');
Route::get('home', 'HomeController@index');
Route::get('welcome', 'HomeController@index');

Route::get('glossary', 'HomeController@glossary');
Route::get('entire-paradigm', 'HomeController@entireParadigm');
Route::get('changelog', 'HomeController@changelog');

Route::get('/missing/page-numbers', 'MissingController@editPageNumbers');
Route::patch('/missing/page-numbers', 'MissingController@updatePageNumbers');

//Route::get('sandbox', function () {
    //return view('sandbox');
//});

//Route::post('sandbox', function () {
    //dd(request()->all());
//});

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index')->middleware('auth');

Route::post('upload/audio', 'UploadController@audio');

Route::resource('audio', 'AudioController');

Route::get('need-attention', 'HomeController@incompleteForms');
Route::get('guide', 'HomeController@guide');

Route::post('backup', 'BackupController@store');

Route::get('profile/bookmarks', 'UserController@bookmarks');

Route::get('resources', 'PageController@resources');
Route::get('resources/statistics', 'PageController@statistics');

Route::get('profile/unsubscribe/{subscription}', 'UserController@unsubscribe');

// Contact Routes
// Route::get('contact',  'ContactController@index');
// Route::post('contact', 'ContactController@send');

// Search Routes
Route::get('search/text', 'SearchController@index');
Route::get('search/general', 'SearchController@general');
Route::get('search/paradigm', 'SearchController@paradigm');
Route::get('search/form', 'SearchController@form');
Route::get('search/smart', 'SearchController@smart');
Route::get('search/smart/results', 'SearchController@smartResults');

// Autocomplete Routes
Route::get('autocomplete/forms', 'AutocompleteController@forms');
Route::get('autocomplete/formParents', 'AutocompleteController@formParents');
Route::get('autocomplete/examples', 'AutocompleteController@examples');
Route::get('autocomplete/exampleParents', 'AutocompleteController@exampleParents');
Route::get('autocomplete/morphemes', 'AutocompleteController@morphemes');
Route::get('autocomplete/morphemeParents', 'AutocompleteController@morphemeParents');
Route::get('autocomplete/sources', 'AutocompleteController@sources');
Route::get('autocomplete/phonemes', 'AutocompleteController@phonemes');
Route::get('autocomplete/phonemeParents', 'AutocompleteController@phonemeParents');

Route::get('log', 'LogController@index');
Route::post('sources/ajax', 'SourceController@store');

// IGT Routes
Route::group(['as' => 'igt::'], function () {
    Route::resource('igt', 'IGTController');
    Route::get('igt/{igt}/basic', 'IGTShowController@basic')->name('showBasic');
});

// Group Routes
Route::patch('groups/{group}/order', 'GroupOrderController@update');
Route::resource('groups', 'GroupController');
Route::get('groups/{group}/clone', 'GroupController@clone');
Route::patch('groups/{group}/hide', 'GroupController@hide');
Route::get('groups/{group}/order/edit', 'GroupOrderController@edit');

// Language Routes
Route::group(['as' => 'languages::'], function () {
    Route::get('languages/order', 'LanguageController@order');
    Route::post('languages/order', 'LanguageController@storeOrder');
    Route::resource('languages', 'LanguageController');
    Route::get('languages/{language}/clone', 'LanguageController@clone');
    Route::get('languages/{language}/addChild', 'LanguageController@addChild');
    Route::get('languages/{language}/addExample', 'LanguageController@addExample');
    Route::get('languages/{language}/addVerbForm', 'LanguageController@addVerbForm');
    Route::get('languages/{language}/addNominalForm', 'LanguageController@addNominalForm');
    Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');
    Route::get('languages/{language}/addRule', 'LanguageController@addRule');
    Route::get('languages/{language}/addParadigm', 'LanguageController@addParadigm');
    Route::get('languages/{language}/addPhoneme', 'LanguageController@addPhoneme');
    Route::patch('languages/{language}/hide', 'LanguageController@hide');

    Route::get('languages/{language}/basic', 'LanguageShowController@basicDetails')->name('showBasic');
    Route::get('languages/{language}/survey', 'LanguageShowController@survey')->name('showSurvey');
    Route::get('languages/{language}/verbs', 'LanguageShowController@verbs')->name('showVerbs');
    Route::get('languages/{language}/nominals', 'LanguageShowController@nominals')->name('showNominals');
    Route::get('languages/{language}/morphemes', 'LanguageShowController@morphemes')->name('showMorphemes');
    Route::get('languages/{language}/paradigms', 'LanguageShowController@paradigms')->name('showParadigms');
    Route::get('languages/{language}/phonemes', 'LanguageShowController@phonemes')->name('showPhonemes');
    Route::get('languages/{language}/clusters', 'LanguageShowController@clusters')->name('showClusters');
    Route::get('languages/{language}/rules', 'LanguageShowController@rules')->name('showRules');
    Route::get('languages/{language}/sources', 'LanguageShowController@sources')->name('showSources');
    Route::get('languages/{language}/log', 'LanguageShowController@log')->name('showLog');
});

// Rule routes
Route::resource('rules', 'RuleController');
Route::get('rules/{rule}/clone', 'RuleController@clone');
Route::patch('rules/{rule}/hide', 'RuleController@hide');
Route::post('rules/{rule}/bookmark', 'RuleController@bookmark');

Route::group(['as' => 'sources::'], function () {
    Route::resource('sources', 'SourceController');
    Route::get('sources/{source}/clone', 'SourceController@clone');

    Route::get('sources/{source}/basic', 'SourceShowController@basicDetails')->name('showBasic');
    Route::get('sources/{source}/forms', 'SourceShowController@forms')->name('showForms');
    Route::get('sources/{source}/morphemes', 'SourceShowController@morphemes')->name('showMorphemes');
});

Route::get('users', 'UserController@index');
Route::get('users/{user}/edit', 'UserController@edit');
Route::patch('users/{user}', 'UserController@update');

Route::group(['as' => 'users::'], function () {
    Route::get('profile', 'UserController@show')->name('profile');
    Route::get('users/{user}', 'UserController@show')->name('show');
    Route::get('users/{user}/history', 'UserController@history')->name('showHistory');
});

/**
 * Morphology
 */
Route::resource('morphemes', 'Morphology\MorphemeController');
Route::get('morphemes/{morpheme}/clone', 'Morphology\MorphemeController@clone');
Route::resource('glosses', 'Morphology\GlossController');
Route::get('glosses/{gloss}/clone', 'Morphology\GlossController@clone');
Route::resource('slots', 'Morphology\SlotController');
Route::get('slots/{slot}/clone', 'Morphology\SlotController@clone');

Route::patch('morphemes/{morpheme}/hide', 'Morphology\MorphemeController@hide');
Route::patch('glosses/{gloss}/hide', 'Morphology\GlossController@hide');
Route::patch('slots/{slot}/hide', 'Morphology\SlotController@hide');

Route::get('changes', 'Morphology\InitialChangeController@index');
Route::post('changes', 'Morphology\InitialChangeController@store');
Route::delete('changes/{change}', 'Morphology\InitialChangeController@destroy');

Route::group(['as' => 'morphemes::'], function () {
    Route::get('morphemes/{morpheme}/possible-connections', 'Morphology\MorphemeController@showConnections')->name('possible-connections');
    Route::patch('morphemes/{morpheme}/connect', 'Morphology\MorphemeController@connect')->name('connect');
    Route::get('morphemes/{morpheme}/basic', 'Morphology\MorphemeShowController@basicDetails')->name('showBasic');
    Route::get('morphemes/{morpheme}/cognates', 'Morphology\MorphemeShowController@cognates')->name('showCognates');
    Route::get('morphemes/{morpheme}/forms', 'Morphology\MorphemeShowController@forms')->name('showForms');
    Route::get('morphemes/{morpheme}/log', 'Morphology\MorphemeShowController@log')->name('showLog');
});


Auth::routes();

Route::get('{args}', 'PageController@show')->where('args', '.*');

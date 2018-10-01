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

// Admin routes
Route::group(['as' => 'admin::'], function () {
    Route::get('admin', 'AdminController@index')->name('index');
    Route::get('admin/users', 'AdminController@users')->name('users');
    Route::get('admin/verbs', 'AdminController@verbs')->name('verbs');
    Route::get('admin/features', 'AdminController@features')->name('features');
    Route::get('admin/phonemes', 'AdminController@phonemes')->name('phonemes');
});

Route::post('/reg-codes/create', 'RegistrationCodeController@create');
Route::patch('/reg-codes/{code}/enable', 'RegistrationCodeController@enable');
Route::patch('/reg-codes/{code}/disable', 'RegistrationCodeController@disable');
Route::delete('/reg-codes/{code}', 'RegistrationCodeController@destroy');

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

/**
 * Phonology
 * TODO: Put this in its own file
 */
Route::group(['as' => 'phonemes::'], function () {
    Route::get('phonemes/search', 'Phonology\SearchController@show')->name('search');
    Route::get('phonemes/search/results', 'Phonology\SearchController@results')->name('searchResults');

    Route::resource('phonemes', 'Phonology\PhonemeController');
    Route::get('phonemes/{phoneme}/clone', 'Phonology\PhonemeController@clone');

    Route::get('phonemes/{phoneme}/basic', 'Phonology\PhonemeShowController@basicDetails')->name('showBasic');
    Route::get('phonemes/{phoneme}/reflexes', 'Phonology\PhonemeShowController@reflexes')->name('showReflexes');
    Route::get('phonemes/{phoneme}/examples', 'Phonology\PhonemeShowController@examples')->name('showExamples');
    Route::get('phonemes/{phoneme}/log', 'Phonology\PhonemeShowController@log')->name('showLog');

    Route::post('phonemes/{phoneme}/bookmark', 'Phonology\PhonemeController@bookmark');
    Route::delete('phonemes/{phoneme}/bookmark', 'Phonology\PhonemeController@unbookmark');

    Route::get('phonemes/{phoneme}/addParent', 'Phonology\PhonemeController@addParent')->name('addParent');
    Route::get('phonemes/{phoneme}/addChild', 'Phonology\PhonemeController@addChild')->name('addChild');
    Route::get('phonemes/{phoneme}/examples/create', 'Phonology\PhonemeExampleController@create')->name('addExample');
    Route::post('phonemes/{phoneme}/examples', 'Phonology\PhonemeExampleController@store');

    Route::post('phonemes/data/{type}', 'Phonology\PhonemeDataController@store');
    Route::delete('phonemes/data/{type}/{id}', 'Phonology\PhonemeDataController@destroy');
});

Route::group(['as' => 'clusters::'], function () {
    Route::get('clusters/create', 'Phonology\PhonemeController@create');
    Route::get('clusters/{phoneme}', 'Phonology\PhonemeController@show');
    Route::delete('clusters/{phoneme}', 'Phonology\PhonemeController@destroy');
    Route::patch('clusters/{phoneme}', 'Phonology\PhonemeController@update');
    Route::patch('clusters/{phoneme}/edit', 'Phonology\PhonemeController@edit');
    Route::get('clusters/{phoneme}/clone', 'Phonology\PhonemeController@clone');

    Route::get('clusters/{phoneme}/basic', 'Phonology\PhonemeShowController@basicDetails')->name('showBasic');
    Route::get('clusters/{phoneme}/reflexes', 'Phonology\PhonemeShowController@reflexes')->name('showReflexes');
    Route::get('clusters/{phoneme}/examples', 'Phonology\PhonemeShowController@examples')->name('showExamples');
    Route::get('clusters/{phoneme}/log', 'Phonology\PhonemeShowController@log')->name('showLog');

    Route::post('clusters/{phoneme}/bookmark', 'Phonology\PhonemeController@bookmark');
    Route::delete('clusters/{phoneme}/bookmark', 'Phonology\PhonemeController@unbookmark');

    Route::get('clusters/{phoneme}/addParent', 'Phonology\PhonemeController@addParent')->name('addParent');
    Route::get('clusters/{phoneme}/addChild', 'Phonology\PhonemeController@addChild')->name('addChild');
    Route::get('clusters/{phoneme}/examples/create', 'Phonology\PhonemeExampleController@create')->name('addExample');
    Route::post('clusters/{phoneme}/examples', 'Phonology\PhonemeExampleController@store');
});

Route::group(['as' => 'reflexes::'], function () {
    Route::resource('reflexes', 'Phonology\ReflexController');
    Route::get('reflexes/{reflex}/clone', 'Phonology\ReflexController@clone');
    Route::post('reflexes/{reflex}/bookmark', 'Phonology\ReflexController@bookmark');
    Route::delete('reflexes/{reflex}/bookmark', 'Phonology\ReflexController@unbookmark');
});


Auth::routes();

Route::get('{args}', 'PageController@show')->where('args', '.*');

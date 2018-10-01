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
Route::view('create', 'create');
Route::view('search', 'search');

Route::get('', 'HomeController@index');
Route::get('home', 'HomeController@index');
Route::get('welcome', 'HomeController@index');

Route::post('/reg-codes/create', 'RegistrationCodeController@create');
Route::patch('/reg-codes/{code}/enable', 'RegistrationCodeController@enable');
Route::patch('/reg-codes/{code}/disable', 'RegistrationCodeController@disable');
Route::delete('/reg-codes/{code}', 'RegistrationCodeController@destroy');

Route::get('glossary', 'HomeController@glossary');
Route::get('entire-paradigm', 'HomeController@entireParadigm');
Route::get('changelog', 'HomeController@changelog');

Route::get('/missing/page-numbers', 'MissingController@editPageNumbers');
Route::patch('/missing/page-numbers', 'MissingController@updatePageNumbers');

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index')->middleware('auth');

Route::post('upload/audio', 'UploadController@audio');

Route::resource('audio', 'AudioController');

Route::get('need-attention', 'HomeController@incompleteForms');
Route::get('guide', 'HomeController@guide');

Route::post('backup', 'BackupController@store');

Route::get('resources', 'PageController@resources');
Route::get('resources/statistics', 'PageController@statistics');

// Search Routes
Route::get('search/text', 'SearchController@index');
Route::get('search/general', 'SearchController@general');
Route::get('search/paradigm', 'SearchController@paradigm');
Route::get('search/form', 'SearchController@form');
Route::get('search/smart', 'SearchController@smart');
Route::get('search/smart/results', 'SearchController@smartResults');

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

// Rule routes
Route::resource('rules', 'RuleController');
Route::get('rules/{rule}/clone', 'RuleController@clone');
Route::patch('rules/{rule}/hide', 'RuleController@hide');
Route::post('rules/{rule}/bookmark', 'RuleController@bookmark');

/**
 * "Profile" routes are aliases for users/{current user}
 *
 * @see /routes/web/users.php
 */
Route::group(['as' => 'users::'], function () {
    Route::get('profile', 'UserController@show')->name('profile');
    Route::get('profile/bookmarks', 'UserController@bookmarks');
    Route::get('profile/unsubscribe/{subscription}', 'UserController@unsubscribe');
});

/**
 * Morphology
 */
Route::resource('glosses', 'Morphology\GlossController');
Route::get('glosses/{gloss}/clone', 'Morphology\GlossController@clone');
Route::resource('slots', 'Morphology\SlotController');
Route::get('slots/{slot}/clone', 'Morphology\SlotController@clone');

Route::patch('glosses/{gloss}/hide', 'Morphology\GlossController@hide');
Route::patch('slots/{slot}/hide', 'Morphology\SlotController@hide');

Route::get('changes', 'Morphology\InitialChangeController@index');
Route::post('changes', 'Morphology\InitialChangeController@store');
Route::delete('changes/{change}', 'Morphology\InitialChangeController@destroy');

Auth::routes();

Route::get('{args}', 'PageController@show')->where('args', '.*');

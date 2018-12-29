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
Route::group(['as' => 'groups::'], function () {
    Route::patch('groups/{group}/order', 'GroupOrderController@update');
    Route::get('groups', 'GroupController@index')->name('index');
    Route::get('groups/create', 'GroupController@create')->name('create');
    Route::get('groups/{group}', 'GroupController@show')->name('show');
    Route::get('groups/{group}/clone', 'GroupController@clone')->name('clone');
    Route::get('groups/{group}/edit', 'GroupController@edit')->name('edit');
    Route::post('groups/{group}/bookmark', 'GroupController@bookmark')->name('bookmark');
    Route::post('groups', 'GroupController@create')->name('create');
    Route::patch('groups/{group}', 'GroupController@update')->name('update');
    Route::delete('groups/{group}', 'GroupController@destroy')->name('delete');
    Route::get('groups/{group}/order/edit', 'GroupOrderController@edit');
});

// Rule routes
Route::group(['as' => 'rules::'], function () {
    Route::get('rules', 'RuleController@index');
    Route::get('rules/create', 'RuleController@create');
    Route::get('rules/{rule}', 'RuleController@show');
    Route::get('rules/{rule}/edit', 'RuleController@edit')->name('edit');
    Route::post('rules', 'RuleController@create');
    Route::patch('rules/{rule}', 'RuleController@update');
    Route::delete('rules/{rule}', 'RuleController@destroy')->name('delete');
    Route::get('rules/{rule}/clone', 'RuleController@clone')->name('clone');
    Route::post('rules/{rule}/bookmark', 'RuleController@bookmark')->name('bookmark');
});

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
Route::group(['as' => 'glosses::'], function () {
    Route::resource('glosses', 'Morphology\GlossController');
    Route::get('glosses/{gloss}/edit', 'Morphology\GlossController@edit')->name('edit');
    Route::delete('glosses/{gloss}', 'Morphology\GlossController@destroy')->name('delete');
    Route::get('glosses/{gloss}/clone', 'Morphology\GlossController@clone')->name('clone');
    Route::get('glosses/{gloss}/bookmark', 'Morphology\GlossController@bookmark')->name('bookmark');
});

Route::group(['as' => 'slots::'], function () {
    Route::resource('slots', 'Morphology\SlotController');
    Route::get('slots/{slot}/edit', 'Morphology\SlotController@edit')->name('edit');
    Route::delete('slots/{slot}', 'Morphology\SlotController@destroy')->name('delete');
    Route::get('slots/{slot}/clone', 'Morphology\SlotController@clone')->name('clone');
    Route::get('slots/{slot}/bookmark', 'Morphology\SlotController@bookmark')->name('bookmark');
});

Route::get('changes', 'Morphology\InitialChangeController@index');
Route::post('changes', 'Morphology\InitialChangeController@store');
Route::delete('changes/{change}', 'Morphology\InitialChangeController@destroy');

Auth::routes();

Route::get('{args}', 'PageController@show')->where('args', '.*');

<?php
Route::get('/gaps/{verbGap}', 'GapController@show');
Route::delete('/gaps/{verbGap}', 'GapController@destroy');
Route::patch('/gaps/{verbGap}', 'GapController@update');
Route::get('/gaps/{verbGap}/clone', 'GapController@clone');
Route::get('/gaps/{verbGap}/edit', 'GapController@edit');
Route::patch('/gaps/{verbGap}/hide', 'GapController@hide');
Route::post('/gaps/{verbGap}/bookmark', 'GapController@bookmark');
Route::delete('/gaps/{verbGap}/bookmark', 'GapController@unbookmark');

Route::get('/forms/async', 'FormController@async');
Route::get('/forms', 'FormController@index');
Route::post('/forms', 'FormController@store');
Route::get('/forms/create', 'FormController@create');
Route::get('/forms/{verbForm}', 'FormController@show');
Route::patch('/forms/{verbForm}', 'FormController@update');
Route::delete('/forms/{verbForm}', 'FormController@destroy');
Route::get('/forms/{verbForm}/clone', 'FormController@clone');
Route::get('/forms/{verbForm}/edit', 'FormController@edit');
Route::get('/forms/{verbForm}/addExample', 'FormController@addExample');
Route::patch('/forms/{verbForm}/disambiguate', 'FormController@disambiguate');
Route::patch('/forms/{verbForm}/hide', 'FormController@hide');
Route::post('/forms/{verbForm}/bookmark', 'FormController@bookmark');
Route::delete('/forms/{verbForm}/bookmark', 'FormController@unbookmark');

Route::post('/classes', 'ClassController@store');
Route::delete('/classes/{class}', 'ClassController@destroy');

Route::post('/modes', 'ModeController@store');
Route::delete('/modes/{mode}', 'ModeController@destroy');

Route::post('/orders', 'OrderController@store');
Route::delete('/orders/{order}', 'OrderController@destroy');

Route::group(['as' => 'verbForms::'], function () {
    Route::post('/forms', 'FormController@store')->name('store');
    Route::patch('/forms/{verbForm}', 'FormController@update')->name('update');
    Route::get('/forms/{verbForm}/basic', 'FormShowController@basicDetails')->name('showBasic');
    Route::get('/forms/{verbForm}/cognates', 'FormShowController@cognates')->name('showCognates');
    Route::get('/forms/{verbForm}/log', 'FormShowController@log')->name('showLog');

    Route::get('/search/paradigm', 'SearchController@paradigm');
    Route::get('/search/paradigm/results', 'SearchController@paradigmResults')->name('paradigmResults');
    Route::get('/search/form', 'SearchController@form');
    Route::get('/search/form/results', 'SearchController@formResults')->name('formResults');
});

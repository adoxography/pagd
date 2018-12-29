<?php

Route::get('/search/paradigm', 'SearchController@paradigm');
Route::get('/search/paradigm/results', 'SearchController@paradigmResults');

Route::resource('/paradigms', 'ParadigmController');

Route::group(['as' => 'nominalForms::'], function() {
	Route::get('/forms/create', 'FormController@create');
    Route::get('/forms/async', 'FormController@async');
	Route::get('/forms/{nominalForm}', 'FormController@show');
    Route::get('/forms/{nominalForm}/clone', 'FormController@clone')->name('clone');
	Route::get('/forms/{nominalForm}/basic',    'FormShowController@basicDetails')->name('showBasic');
	Route::get('/forms/{nominalForm}/cognates', 'FormShowController@cognates')->name('showCognates');
	Route::get('/forms/{nominalForm}/log',      'FormShowController@log')->name('showLog');

	Route::get('/forms/{nominalForm}/edit', 'FormController@edit')->name('edit');
	Route::post('/forms', 'FormController@store');
	Route::patch('/forms/{nominalForm}', 'FormController@update');
	Route::delete('/forms/{nominalForm}', 'FormController@destroy')->name('delete');
    Route::post('/forms/{nominalForm}/bookmark', 'FormController@bookmark')->name('bookmark');
});

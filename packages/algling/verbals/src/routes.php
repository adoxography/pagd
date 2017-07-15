<?php
Route::get('verbs/gaps/{verbGap}',        'GapController@show');
Route::delete('verbs/gaps/{verbGap}',     'GapController@destroy');
Route::patch('verbs/gaps/{verbGap}',      'GapController@update');
Route::get('verbs/gaps/{verbGap}/edit',   'GapController@edit');
Route::patch('verbs/gaps/{verbGap}/hide', 'GapController@hide');
Route::post('verbs/gaps/{verbGap}/bookmark',      'GapController@bookmark');
Route::delete('verbs/gaps/{verbGap}/bookmark',    'GapController@unbookmark');

Route::get('verbs/forms',                           'FormController@index');
Route::post('verbs/forms',                          'FormController@store');
Route::get('verbs/forms/create',                    'FormController@create');
Route::get('verbs/forms/{verbForm}',                'FormController@show');
Route::patch('verbs/forms/{verbForm}',              'FormController@update');
Route::delete('verbs/forms/{verbForm}',             'FormController@destroy');
Route::get('verbs/forms/{verbForm}/edit',           'FormController@edit');
Route::get('verbs/forms/{verbForm}/addExample',     'FormController@addExample');
Route::patch('verbs/forms/{verbForm}/disambiguate', 'FormController@disambiguate');
Route::patch('verbs/forms/{verbForm}/hide',         'FormController@hide');
Route::post('verbs/forms/{verbForm}/bookmark',      'FormController@bookmark');
Route::delete('verbs/forms/{verbForm}/bookmark',    'FormController@unbookmark');

Route::group(['as' => 'verbForms::'], function() {
	Route::post('verbs/forms',  'FormController@store')->name('store');
	Route::patch('verbs/forms/{verbForm}', 'FormController@update')->name('update');
	Route::get('verbs/forms/{verbForm}/basic',    'FormShowController@basicDetails')->name('showBasic');
	Route::get('verbs/forms/{verbForm}/cognates', 'FormShowController@cognates')->name('showCognates');
	Route::get('verbs/forms/{verbForm}/log',      'FormShowController@log')->name('showLog');

	Route::get('verbs/search/paradigm',         'SearchController@paradigm');
	Route::get('verbs/search/paradigm/results', 'SearchController@paradigmResults')->name('paradigmResults');
	Route::get('verbs/search/form',             'SearchController@form');
	Route::get('verbs/search/form/results',     'SearchController@formResults')->name('formResults');
});
<?php

Route::resource('forms',                  'FormController');
Route::get('forms/{form}/clone',          'FormController@clone');
Route::get('forms/{form}/addExample',     'FormController@addExample');
Route::patch('forms/{form}/disambiguate', 'FormController@disambiguate');
Route::patch('forms/{form}/hide',         'FormController@hide');
Route::post('forms/{form}/bookmark',      'FormController@bookmark');
Route::delete('forms/{form}/bookmark',    'FormController@unbookmark');

Route::resource('examples',                     'ExampleController');
Route::get('examples/{example}/clone',          'ExampleController@clone');
Route::patch('examples/{example}/disambiguate', 'ExampleController@disambiguate');
Route::patch('examples/{example}/hide',         'ExampleController@hide');
Route::post('examples/{example}/bookmark',      'ExampleController@bookmark');
Route::delete('examples/{example}/bookmark',    'ExampleController@unbookmark');

Route::group(['as' => 'examples::'], function() {
	Route::get('examples/{example}/basic', 'ExampleShowController@basicDetails')->name('showBasic');
	Route::get('examples/{example}/cognates', 'ExampleShowController@cognates')->name('showCognates');
	Route::get('examples/{example}/log', 'ExampleShowController@log')->name('showLog');
});

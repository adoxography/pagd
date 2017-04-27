<?php

Route::resource('examples',                     'ExampleController');
Route::patch('examples/{example}/disambiguate', 'ExampleController@disambiguate');
Route::patch('examples/{example}/hide',         'ExampleController@hide');

Route::get('empty-forms/{emptyform}',        'GapController@show');
Route::delete('empty-forms/{emptyform}',     'GapController@destroy');
Route::patch('empty-forms/{emptyform}',      'GapController@update');
Route::get('empty-forms/{emptyform}/edit',   'GapController@edit');
Route::patch('empty-forms/{emptyform}/hide', 'GapController@hide');

Route::resource('forms',                  'FormController');
Route::get('forms/{form}/addExample',     'FormController@addExample');
Route::patch('forms/{form}/disambiguate', 'FormController@disambiguate');
Route::patch('forms/{form}/hide',         'FormController@hide');

Route::get('verbs',             'FormController@index');
Route::post('verbs',            'FormController@store');
Route::get('verbs/create',      'FormController@create');
Route::get('verbs/{form}',      'FormController@show');
Route::patch('verbs/{form}',    'FormController@update');
Route::delete('verbs/{form}',   'FormController@destroy');
Route::get('verbs/{form}/edit', 'FormController@edit');
Route::get('verbs/{form}/addExample',     'FormController@addExample');
Route::patch('verbs/{form}/disambiguate', 'FormController@disambiguate');
Route::patch('verbs/{form}/hide',         'FormController@hide');
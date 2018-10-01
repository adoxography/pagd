<?php

Route::get('/', 'FormController@index');
Route::get('/create', 'FormController@create');
Route::get('/{form}', 'FormController@show');
Route::get('/{form}/edit', 'FormController@edit');
Route::post('/', 'FormController@store');
Route::patch('/{form}', 'FormController@update');
Route::delete('/{form}', 'FormController@destroy');

Route::get('/{form}/clone',          'FormController@clone');
Route::get('/{form}/addExample',     'FormController@addExample');
Route::patch('/{form}/disambiguate', 'FormController@disambiguate');
Route::patch('/{form}/hide',         'FormController@hide');
Route::post('/{form}/bookmark',      'FormController@bookmark');
Route::delete('/{form}/bookmark',    'FormController@unbookmark');

<?php

Route::group(['as' => 'examples::'], function() {
    Route::get('/',                         'ExampleController@index');
    Route::get('/create',                   'ExampleController@create');
    Route::get('/{example}',                'ExampleController@show');
    Route::get('/{example}/edit',           'ExampleController@edit');
    Route::post('/',                        'ExampleController@store');
    Route::patch('/{example}',              'ExampleController@update');
    Route::delete('/{example}',             'ExampleController@store');

    Route::get('/{example}/clone',          'ExampleController@clone');
    Route::patch('/{example}/disambiguate', 'ExampleController@disambiguate');
    Route::patch('/{example}/hide',         'ExampleController@hide');
    Route::post('/{example}/bookmark',      'ExampleController@bookmark');
    Route::delete('/{example}/bookmark',    'ExampleController@unbookmark');
	Route::get('/{example}/basic', 'ExampleShowController@basicDetails')->name('showBasic');
	Route::get('/{example}/cognates', 'ExampleShowController@cognates')->name('showCognates');
	Route::get('/{example}/log', 'ExampleShowController@log')->name('showLog');
});

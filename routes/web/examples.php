<?php

Route::group(['as' => 'examples::'], function() {
    Route::get('/',                         'ExampleController@index');
    Route::get('/create',                   'ExampleController@create');
    Route::get('/{example}',                'ExampleController@show');
    Route::get('/{example}/edit',           'ExampleController@edit')->name('edit');
    Route::post('/',                        'ExampleController@store');
    Route::patch('/{example}',              'ExampleController@update');
    Route::delete('/{example}',             'ExampleController@destroy')->name('delete');

    Route::get('/{example}/clone',          'ExampleController@clone')->name('clone');
    Route::patch('/{example}/disambiguate', 'ExampleController@disambiguate');
    Route::patch('/{example}/hide',         'ExampleController@hide');
    Route::post('/{example}/bookmark',      'ExampleController@bookmark')->name('bookmark');
	Route::get('/{example}/basic', 'ExampleShowController@basicDetails')->name('showBasic');
	Route::get('/{example}/cognates', 'ExampleShowController@cognates')->name('showCognates');
	Route::get('/{example}/log', 'ExampleShowController@log')->name('showLog');
});

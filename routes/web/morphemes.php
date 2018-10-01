<?php

Route::group(['as' => 'morphemes::'], function () {
    Route::get('/', 'MorphemeController@index');
    Route::get('/create', 'MorphemeController@create');
    Route::get('/{morpheme}', 'MorphemeController@show');
    Route::get('/{morpheme}/edit', 'MorphemeController@edit');
    Route::post('/', 'MorphemeController@store');
    Route::patch('/{morpheme}', 'MorphemeController@update');
    Route::delete('/{morpheme}', 'MorphemeController@destroy');

    Route::get('/{morpheme}/clone', 'MorphemeController@clone');
    Route::patch('/{morpheme}/hide', 'MorphemeController@hide');

    Route::get('/{morpheme}/possible-connections', 'MorphemeController@showConnections')->name('possible-connections');
    Route::patch('/{morpheme}/connect', 'MorphemeController@connect')->name('connect');
    Route::get('/{morpheme}/basic', 'MorphemeShowController@basicDetails')->name('showBasic');
    Route::get('/{morpheme}/cognates', 'MorphemeShowController@cognates')->name('showCognates');
    Route::get('/{morpheme}/forms', 'MorphemeShowController@forms')->name('showForms');
    Route::get('/{morpheme}/log', 'MorphemeShowController@log')->name('showLog');
});

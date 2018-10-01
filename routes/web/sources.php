<?php

Route::group(['as' => 'sources::'], function () {
    Route::resource('sources', 'SourceController');
    Route::get('/', 'SourceController@index');
    Route::get('/create', 'SourceController@create');
    Route::get('/{source}', 'SourceController@show');
    Route::get('/{source}/edit', 'SourceController@edit');
    Route::post('/', 'SourceController@store');
    Route::patch('/{source}', 'SourceController@update');
    Route::delete('/{source}', 'SourceController@destroy');

    Route::get('/{source}/basic', 'SourceShowController@basicDetails')->name('showBasic');
    Route::get('/{source}/forms', 'SourceShowController@forms')->name('showForms');
    Route::get('/{source}/morphemes', 'SourceShowController@morphemes')->name('showMorphemes');
});

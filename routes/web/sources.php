<?php

Route::group(['as' => 'sources::'], function () {
    Route::get('/', 'SourceController@index');
    Route::get('/create', 'SourceController@create');
    Route::get('/{source}', 'SourceController@show');
    Route::get('/{source}/edit', 'SourceController@edit')->name('edit');
    Route::post('/', 'SourceController@store');
    Route::patch('/{source}', 'SourceController@update');
    Route::delete('/{source}', 'SourceController@destroy')->name('delete');
    Route::post('/{source}/bookmark', 'SourceController@bookmark')->name('bookmark');
    Route::get('/{source}/clone', 'SourceController@clone')->name('clone');

    Route::get('/{source}/basic', 'SourceShowController@basicDetails')->name('showBasic');
    Route::get('/{source}/forms', 'SourceShowController@forms')->name('showForms');
    Route::get('/{source}/morphemes', 'SourceShowController@morphemes')->name('showMorphemes');
});

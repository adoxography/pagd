<?php

Route::group(['as' => 'phonemes::'], function () {
    Route::get('/search', 'SearchController@show')->name('search');
    Route::get('/search/results', 'SearchController@results')->name('searchResults');

    Route::get('/', 'PhonemeController@index');
    Route::get('/create', 'PhonemeController@create');
    Route::get('/{phoneme}', 'PhonemeController@show');
    Route::get('/{phoneme}/edit', 'PhonemeController@edit');
    Route::post('/', 'PhonemeController@store');
    Route::patch('/{phoneme}', 'PhonemeController@update');
    Route::delete('/{phoneme}', 'PhonemeController@destroy');

    Route::get('/{phoneme}/clone', 'PhonemeController@clone');

    Route::get('/{phoneme}/basic', 'PhonemeShowController@basicDetails')->name('showBasic');
    Route::get('/{phoneme}/reflexes', 'PhonemeShowController@reflexes')->name('showReflexes');
    Route::get('/{phoneme}/examples', 'PhonemeShowController@examples')->name('showExamples');
    Route::get('/{phoneme}/log', 'PhonemeShowController@log')->name('showLog');

    Route::post('/{phoneme}/bookmark', 'PhonemeController@bookmark');
    Route::delete('/{phoneme}/bookmark', 'PhonemeController@unbookmark');

    Route::get('/{phoneme}/addParent', 'PhonemeController@addParent')->name('addParent');
    Route::get('/{phoneme}/addChild', 'PhonemeController@addChild')->name('addChild');
    Route::get('/{phoneme}/examples/create', 'PhonemeExampleController@create')->name('addExample');
    Route::post('/{phoneme}/examples', 'PhonemeExampleController@store');

    Route::post('/data/{type}', 'PhonemeDataController@store');
    Route::delete('/data/{type}/{id}', 'PhonemeDataController@destroy');
});

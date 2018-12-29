<?php

Route::group(['as' => 'clusters::'], function () {
    Route::get('/create', 'PhonemeController@create');
    Route::get('/{phoneme}', 'PhonemeController@show');
    Route::delete('/{phoneme}', 'PhonemeController@destroy')->name('delete');
    Route::patch('/{phoneme}', 'PhonemeController@update');
    Route::patch('/{phoneme}/edit', 'PhonemeController@edit')->name('edit');
    Route::get('/{phoneme}/clone', 'PhonemeController@clone')->name('clone');

    Route::get('/{phoneme}/basic', 'PhonemeShowController@basicDetails')->name('showBasic');
    Route::get('/{phoneme}/reflexes', 'PhonemeShowController@reflexes')->name('showReflexes');
    Route::get('/{phoneme}/examples', 'PhonemeShowController@examples')->name('showExamples');
    Route::get('/{phoneme}/log', 'PhonemeShowController@log')->name('showLog');

    Route::post('/{phoneme}/bookmark', 'PhonemeController@bookmark')->name('bookmark');
    Route::delete('/{phoneme}/bookmark', 'PhonemeController@unbookmark');

    Route::get('/{phoneme}/addParent', 'PhonemeController@addParent')->name('addParent');
    Route::get('/{phoneme}/addChild', 'PhonemeController@addChild')->name('addChild');
    Route::get('/{phoneme}/examples/create', 'PhonemeExampleController@create')->name('addExample');
    Route::post('/{phoneme}/examples', 'PhonemeExampleController@store');
});

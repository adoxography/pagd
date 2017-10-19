<?php
Route::group(['as' => 'phonemes::'], function () {
    Route::resource('phonemes', 'PhonemeController');

    Route::get('phonemes/{phoneme}/basic', 'PhonemeShowController@basicDetails')->name('showBasic');
    Route::get('phonemes/{phoneme}/reflexes', 'PhonemeShowController@reflexes')->name('showReflexes');
    Route::get('phonemes/{phoneme}/examples', 'PhonemeShowController@examples')->name('showExamples');
    Route::get('phonemes/{phoneme}/log', 'PhonemeShowController@log')->name('showLog');

    Route::post('phonemes/{phoneme}/bookmark', 'PhonemeController@bookmark');
    Route::delete('phonemes/{phoneme}/bookmark', 'PhonemeController@unbookmark');

    Route::get('phonemes/{phoneme}/addParent', 'PhonemeController@addParent')->name('addParent');
    Route::get('phonemes/{phoneme}/addChild', 'PhonemeController@addChild')->name('addChild');
    Route::get('phonemes/{phoneme}/examples/create', 'PhonemeExampleController@create')->name('addExample');
    Route::post('phonemes/{phoneme}/examples', 'PhonemeExampleController@store');
});

Route::group(['as' => 'clusters::'], function () {
    Route::get('clusters/create', 'PhonemeController@create');
    Route::get('clusters/{phoneme}', 'PhonemeController@show');
    Route::delete('clusters/{phoneme}', 'PhonemeController@destroy');
    Route::patch('clusters/{phoneme}', 'PhonemeController@update');
    Route::patch('clusters/{phoneme}/edit', 'PhonemeController@edit');

    Route::get('clusters/{phoneme}/basic', 'PhonemeShowController@basicDetails')->name('showBasic');
    Route::get('clusters/{phoneme}/reflexes', 'PhonemeShowController@reflexes')->name('showReflexes');
    Route::get('clusters/{phoneme}/examples', 'PhonemeShowController@examples')->name('showExamples');
    Route::get('clusters/{phoneme}/log', 'PhonemeShowController@log')->name('showLog');

    Route::post('clusters/{phoneme}/bookmark', 'PhonemeController@bookmark');
    Route::delete('clusters/{phoneme}/bookmark', 'PhonemeController@unbookmark');

    Route::get('clusters/{phoneme}/addParent', 'PhonemeController@addParent')->name('addParent');
    Route::get('clusters/{phoneme}/addChild', 'PhonemeController@addChild')->name('addChild');
    Route::get('clusters/{phoneme}/examples/create', 'PhonemeExampleController@create')->name('addExample');
    Route::post('clusters/{phoneme}/examples', 'PhonemeExampleController@store');
});

Route::group(['as' => 'reflexes::'], function () {
    Route::resource('reflexes', 'ReflexController');
    Route::post('reflexes/{reflex}/bookmark', 'ReflexController@bookmark');
    Route::delete('reflexes/{reflex}/bookmark', 'ReflexController@unbookmark');
});

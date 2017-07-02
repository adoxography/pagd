<?php

Route::group(['as' => 'phonemes::'], function() {
	Route::resource('phonemes', 'PhonemeController');

	Route::get('phonemes/{phoneme}/basic', 'PhonemeShowController@basicDetails')->name('showBasic');
	Route::get('phonemes/{phoneme}/reflexes', 'PhonemeShowController@reflexes')->name('showReflexes');
	Route::get('phonemes/{phoneme}/log',   'PhonemeShowController@log')->name('showLog');

	Route::get('phonemes/{phoneme}/addParent', 'PhonemeController@addParent')->name('addParent');
	Route::get('phonemes/{phoneme}/addChild', 'PhonemeController@addChild')->name('addChild');
});

Route::group(['as' => 'clusters::'], function() {
	Route::get('clusters/create', 'PhonemeController@create');
	Route::get('clusters/{phoneme}', 'PhonemeController@show');
	Route::delete('clusters/{phoneme}', 'PhonemeController@destroy');
	Route::patch('clusters/{phoneme}', 'PhonemeController@update');
	Route::patch('clusters/{phoneme}/edit', 'PhonemeController@edit');

	Route::get('clusters/{phoneme}/basic', 'PhonemeShowController@basicDetails')->name('showBasic');
	Route::get('clusters/{phoneme}/reflexes', 'PhonemeShowController@reflexes')->name('showReflexes');
	Route::get('clusters/{phoneme}/log',   'PhonemeShowController@log')->name('showLog');

	Route::get('clusters/{phoneme}/addParent', 'PhonemeController@addParent')->name('addParent');
	Route::get('clusters/{phoneme}/addChild', 'PhonemeController@addChild')->name('addChild');
});

Route::group(['as' => 'reflexes::'], function() {
	Route::resource('reflexes', 'ReflexController');
});
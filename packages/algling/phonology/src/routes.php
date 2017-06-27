<?php

Route::group(['as' => 'phonemes::'], function() {
	Route::resource('phonemes', 'PhonemeController');
	Route::get('phonemes/{phoneme}/basic', 'PhonemeShowController@basicDetails')->name('showBasic');
	Route::get('phonemes/{phoneme}/log',   'PhonemeShowController@log')->name('showLog');
});
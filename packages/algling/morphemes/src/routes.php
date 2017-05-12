<?php

Route::resource('morphemes', 'MorphemeController');
Route::resource('glosses',   'GlossController');
Route::resource('slots',     'SlotController');

Route::patch('morphemes/{morpheme}/hide', 'MorphemeController@hide');
Route::patch('glosses/{gloss}/hide', 'GlossController@hide');
Route::patch('slots/{slot}/hide', 'SlotController@hide');

Route::get('changes', 'InitialChangeController@index');
Route::post('changes', 'InitialChangeController@store');
Route::delete('changes/{change}', 'InitialChangeController@destroy');

Route::group(['as' => 'morphemes::'], function() {
	Route::get('morphemes/{morpheme}/basic',    'MorphemeShowController@basicDetails')->name('showBasic');
	Route::get('morphemes/{morpheme}/cognates', 'MorphemeShowController@cognates')->name('showCognates');
	Route::get('morphemes/{morpheme}/forms',    'MorphemeShowController@forms')->name('showForms');
	Route::get('morphemes/{morpheme}/log',      'MorphemeShowController@log')->name('showLog');
});
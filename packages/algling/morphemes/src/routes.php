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
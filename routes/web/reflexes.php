<?php

Route::group(['as' => 'reflexes::'], function () {
    Route::get('/', 'ReflexController@index');
    Route::get('/create', 'ReflexController@create');
    Route::get('/{reflex}', 'ReflexController@show');
    Route::get('/{reflex}/edit', 'ReflexController@edit');
    Route::post('/', 'ReflexController@store');
    Route::patch('/{reflex}', 'ReflexController@update');
    Route::delete('/{reflex}', 'ReflexController@destroy');

    Route::get('reflexes/{reflex}/clone', 'Phonology\ReflexController@clone');
    Route::post('reflexes/{reflex}/bookmark', 'Phonology\ReflexController@bookmark');
    Route::delete('reflexes/{reflex}/bookmark', 'Phonology\ReflexController@unbookmark');
});

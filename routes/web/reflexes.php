<?php

Route::group(['as' => 'reflexes::'], function () {
    Route::get('/', 'ReflexController@index');
    Route::get('/create', 'ReflexController@create');
    Route::get('/{reflex}', 'ReflexController@show');
    Route::get('/{reflex}/edit', 'ReflexController@edit')->name('edit');
    Route::post('/', 'ReflexController@store');
    Route::patch('/{reflex}', 'ReflexController@update');
    Route::delete('/{reflex}', 'ReflexController@destroy')->name('delete');

    Route::get('reflexes/{reflex}/clone', 'ReflexController@clone')->name('clone');
    Route::post('reflexes/{reflex}/bookmark', 'ReflexController@bookmark')->name('bookmark');
});

<?php

Route::group(['as' => 'datapoints::'], function () {
    Route::get('/', 'DatapointController@index');
    Route::get('/create', 'DatapointController@create');
    Route::get('/{datapoint}', 'DatapointController@show')->name('show');
    Route::get('/{datapoint}/edit', 'DatapointController@edit')->name('edit');
    Route::post('/', 'DatapointController@store');
    Route::patch('/{datapoint}', 'DatapointController@update');
    Route::delete('/{datapoint}', 'DatapointController@delete')->name('delete');
    Route::get('datapoints/{datapoint}/clone', 'DatapointController@clone')->name('clone');
    Route::post('datapoints/{datapoint}/bookmark', 'DatapointController@bookmark')->name('bookmark');
});

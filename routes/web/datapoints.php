<?php

Route::get('/', 'DatapointController@index');
Route::get('/create', 'DatapointController@create');
Route::get('/{datapoint}', 'DatapointController@show');
Route::get('/{datapoint}/edit', 'DatapointController@edit');
Route::patch('/{datapoint}', 'DatapointController@update');
Route::delete('/{datapoint}', 'DatapointController@delete');
Route::get('datapoints/{datapoint}/clone', 'DatapointController@clone');

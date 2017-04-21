<?php

Route::get('variables/{variable}/languages/{language}/addDatapoint', 'DatapointController@addDatapoint');

Route::resource('variables', 'VariableController');
Route::resource('datapoints', 'DatapointController');
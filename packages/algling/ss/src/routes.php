<?php

Route::resource('datapoints', 'DatapointController');
Route::get('variables/{variable}/languages/{language}/addDatapoint', 'DatapointController@addDatapoint');

Route::group(['as' => 'variables::'], function() {
	Route::resource('variables', 'VariableController');

	Route::post('variables/{variable}/bookmark', 'VariableController@bookmark');

	Route::get('variables/{variable}/basic',      'VariableShowController@basicDetails')->name('showBasic');
	Route::get('variables/{variable}/datapoints', 'VariableShowController@datapoints')->name('showDatapoints');
});
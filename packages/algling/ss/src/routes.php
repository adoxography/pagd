<?php

Route::resource('datapoints', 'DatapointController');
Route::get('datapoints/{datapoint}/clone', 'DatapointController@clone');
Route::get('variables/{variable}/languages/{language}/addDatapoint', 'DatapointController@addDatapoint');

Route::group(['as' => 'variables::'], function() {
	Route::resource('variables', 'VariableController');
    Route::get('variables/{variable}/clone', 'VariableController@clone');

	Route::post('variables/{variable}/bookmark', 'VariableController@bookmark');

	Route::get('variables/{variable}/basic',      'VariableShowController@basicDetails')->name('showBasic');
	Route::get('variables/{variable}/datapoints', 'VariableShowController@datapoints')->name('showDatapoints');
	Route::get('variables/{variable}/languages', 'VariableShowController@languages')->name('showLanguages');
});

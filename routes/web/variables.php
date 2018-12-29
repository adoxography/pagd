<?php
Route::group(['as' => 'variables::'], function() {
    Route::get('/', 'VariableController@index');
    Route::get('/create', 'VariableController@create');
    Route::get('/{variable}', 'VariableController@show');
    Route::get('/{variable}/edit', 'VariableController@edit')->name('edit');
    Route::post('/', 'VariableController@store');
    Route::patch('/{variable}', 'VariableController@update');
    Route::delete('/{variable}', 'VariableController@destroy')->name('delete');

    Route::get('/{variable}/languages/{language}/addDatapoint', 'DatapointController@addDatapoint')->name('addDatapoint');
    Route::get('/{variable}/clone', 'VariableController@clone')->name('clone');

	Route::post('/{variable}/bookmark', 'VariableController@bookmark')->name('bookmark');

	Route::get('/{variable}/basic',      'VariableShowController@basicDetails')->name('showBasic');
	Route::get('/{variable}/datapoints', 'VariableShowController@datapoints')->name('showDatapoints');
	Route::get('/{variable}/languages', 'VariableShowController@languages')->name('showLanguages');
});

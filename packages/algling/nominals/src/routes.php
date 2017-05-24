<?php

Route::resource('nominals/paradigms', 'ParadigmController');
// Route::resource('nominals/forms', 'FormController');

Route::group(['as' => 'nominalForms::'], function() {
	Route::get('nominals/forms/create', 'FormController@create');
	Route::get('nominals/forms/{nominalForm}', 'FormController@show');
	Route::get('nominals/forms/{nominalForm}/basic',    'FormShowController@basicDetails')->name('showBasic');
	Route::get('nominals/forms/{nominalForm}/cognates', 'FormShowController@cognates')->name('showCognates');

	Route::get('nominals/forms/{nominalForm}/edit', 'FormController@edit');
	Route::post('nominals/forms', 'FormController@store');
	Route::patch('nominals/forms/{nominalForm}', 'FormController@update');
	Route::delete('nominals/forms/{nominalForm}', 'FormController@destroy');
});
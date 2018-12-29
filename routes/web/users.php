<?php

Route::group(['as' => 'users::'], function () {
    Route::get('/', 'UserController@index');
    Route::get('/{user}/edit', 'UserController@edit')->name('edit');
    Route::get('/{user}', 'UserController@show')->name('show');
    Route::get('/{user}/history', 'UserController@history')->name('showHistory');
    Route::patch('/{user}', 'UserController@update');
});

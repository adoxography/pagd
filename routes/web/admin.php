<?php

Route::group(['as' => 'admin::'], function () {
    Route::get('/', 'AdminController@index')->name('index');
    Route::get('/users', 'AdminController@users')->name('users');
    Route::get('/verbs', 'AdminController@verbs')->name('verbs');
    Route::get('/features', 'AdminController@features')->name('features');
    Route::get('/phonemes', 'AdminController@phonemes')->name('phonemes');
});

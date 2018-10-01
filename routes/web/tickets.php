<?php

Route::group(['as' => 'tickets::'], function () {
    Route::get('/', 'TicketController@index');
    Route::get('/create', 'TicketController@create');
    Route::get('/{ticket}', 'TicketController@show');
    Route::get('/{ticket}/edit', 'TicketController@edit');
    Route::post('/', 'TicketController@store');
    Route::patch('/{ticket}', 'TicketController@update');
    Route::delete('/{ticket}', 'TicketController@destroy');

    Route::get('/{ticket}/subscribe', 'TicketController@subscribe');
    Route::get('/{ticket}/respond', 'TicketController@respond');
    Route::post('/{ticket}/respond', 'TicketController@updateResponse');
    Route::post('/{ticket}/comment', 'CommentController@create');
});

<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('examples', 'Api\\ExampleController');
Route::resource('forms', 'Api\\FormController');

Route::post('postreceive', 'WebhookController@postreceive');


// ->middleware('auth:api')

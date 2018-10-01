<?php

Route::post('features',             'FeatureController@store');
Route::delete('features/{feature}', 'FeatureController@destroy');

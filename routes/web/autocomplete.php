<?php

Route::group(['as' => 'autocomplete::'], function () {
    Route::get('/forms', 'AutocompleteController@forms');
    Route::get('/formParents', 'AutocompleteController@formParents');
    Route::get('/examples', 'AutocompleteController@examples');
    Route::get('/exampleParents', 'AutocompleteController@exampleParents');
    Route::get('/morphemes', 'AutocompleteController@morphemes');
    Route::get('/morphemeParents', 'AutocompleteController@morphemeParents');
    Route::get('/sources', 'AutocompleteController@sources');
    Route::get('/phonemes', 'AutocompleteController@phonemes');
    Route::get('/phonemeParents', 'AutocompleteController@phonemeParents');
});

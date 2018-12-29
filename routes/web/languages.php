<?php

Route::group(['as' => 'languages::'], function () {
    Route::get('/order', 'LanguageController@order');
    Route::post('/order', 'LanguageController@storeOrder');

    Route::get('/', 'LanguageController@index');
    Route::get('/create', 'LanguageController@create');
    Route::get('/{language}', 'LanguageController@show');
    Route::get('/{language}/edit', 'LanguageController@edit')->name('edit');
    Route::post('/', 'LanguageController@store');
    Route::get('/{language}/bookmark', 'LanguageController@bookmark')->name('bookmark');
    Route::patch('/{language}', 'LanguageController@update');
    Route::delete('/{language}', 'LanguageController@destroy')->name('delete');

    Route::get('/{language}/clone', 'LanguageController@clone')->name('clone');
    Route::get('/{language}/addChild', 'LanguageController@addChild');
    Route::get('/{language}/addExample', 'LanguageController@addExample');
    Route::get('/{language}/addVerbForm', 'LanguageController@addVerbForm');
    Route::get('/{language}/addNominalForm', 'LanguageController@addNominalForm');
    Route::get('/{language}/addMorpheme', 'LanguageController@addMorpheme');
    Route::get('/{language}/addRule', 'LanguageController@addRule');
    Route::get('/{language}/addParadigm', 'LanguageController@addParadigm');
    Route::get('/{language}/addPhoneme', 'LanguageController@addPhoneme');
    Route::patch('/{language}/hide', 'LanguageController@hide');

    Route::get('/{language}/basic', 'LanguageShowController@basicDetails')->name('showBasic');
    Route::get('/{language}/survey', 'LanguageShowController@survey')->name('showSurvey');
    Route::get('/{language}/verbs', 'LanguageShowController@verbs')->name('showVerbs');
    Route::get('/{language}/nominals', 'LanguageShowController@nominals')->name('showNominals');
    Route::get('/{language}/morphemes', 'LanguageShowController@morphemes')->name('showMorphemes');
    Route::get('/{language}/paradigms', 'LanguageShowController@paradigms')->name('showParadigms');
    Route::get('/{language}/phonemes', 'LanguageShowController@phonemes')->name('showPhonemes');
    Route::get('/{language}/clusters', 'LanguageShowController@clusters')->name('showClusters');
    Route::get('/{language}/rules', 'LanguageShowController@rules')->name('showRules');
    Route::get('/{language}/sources', 'LanguageShowController@sources')->name('showSources');
    Route::get('/{language}/log', 'LanguageShowController@log')->name('showLog');
});

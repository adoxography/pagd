<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExamplePhonemeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('example_phoneme', function(Blueprint $table) {
            $table->unsignedInteger('example_id');
            $table->unsignedInteger('phoneme_id');

            $table->foreign('example_id')->references('id')->on('word_examples');
            $table->foreign('phoneme_id')->references('id')->on('phon_phonemes');
            $table->unique(['example_id', 'phoneme_id']);

            $table->text('usage_notes')->nullable();
            $table->text('comments')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('example_phonemes');
    }
}

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

            $table->foreign('example_id')->references('id')->on('Phon_Examples');
            $table->foreign('phoneme_id')->references('id')->on('Phon_Phonemes');
            $table->unique(['example_id', 'phoneme_id']);
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

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllophonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Phon_Allophones', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('environment')->nullable();

            // Foreign keys
            $table->unsignedInteger('phoneme_id');

            // Timestamps
            $table->timestamps();

            // Constraints
            $table->foreign('phoneme_id')->references('id')->on('Phon_Phonemes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Allophones');
    }
}

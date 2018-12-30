<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVowelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phon_vowels', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('height_id')->nullable();
            $table->unsignedInteger('backness_id')->nullable();
            $table->unsignedInteger('length_id')->nullable();

            // Booleans
            $table->boolean('is_nasal')->default(false);
            $table->boolean('is_rounded')->default(false);

            // Constraints
            $table->foreign('height_id')->references('id')->on('phon_heights');
            $table->foreign('backness_id')->references('id')->on('phon_backnesses');
            $table->unique(['height_id', 'backness_id', 'length_id', 'is_nasal', 'is_rounded'], 'phon_vowels_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phon_vowels');
    }
}

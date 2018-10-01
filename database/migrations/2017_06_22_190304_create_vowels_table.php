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
        Schema::create('Phon_Vowels', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('height_id');
            $table->unsignedInteger('backness_id');
            $table->unsignedInteger('length_id')->nullable();

            // Booleans
            $table->boolean('isNasal')->default(false);
            $table->boolean('isRounded')->default(false);

            // Constraints
            $table->foreign('height_id')->references('id')->on('Phon_Heights');
            $table->foreign('backness_id')->references('id')->on('Phon_Backnesses');
            $table->unique(['height_id', 'backness_id', 'length_id', 'isNasal', 'isRounded'], 'phon_vowels_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Vowels');
    }
}

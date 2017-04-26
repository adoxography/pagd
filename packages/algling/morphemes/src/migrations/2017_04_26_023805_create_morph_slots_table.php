<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphSlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Morph_Slots', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('abv')->unique();
            $table->string('colour')->nullable();

            // Text fields
            $table->text('description')->nullable();

            // Timestamps
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Morph_Slots');
    }
}

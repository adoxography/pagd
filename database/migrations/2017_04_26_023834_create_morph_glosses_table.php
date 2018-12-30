<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphGlossesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('morph_glosses', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('abv')->unique();

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
        Schema::dropIfExists('morph_glosses');
    }
}

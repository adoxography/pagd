<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphMorphemeablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Morph_Morphemeables', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('morpheme_id');
            $table->morphs('morphemeable');

            // Other
            $table->unsignedInteger('position');

            // Constraints
            $table->foreign('morpheme_id')->references('id')->on('Morph_Morphemes');
            $table->unique(['morpheme_id', 'morphemeable_type', 'morphemeable_id', 'position'], 'morphemeables_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Morph_Morphemeables');
    }
}

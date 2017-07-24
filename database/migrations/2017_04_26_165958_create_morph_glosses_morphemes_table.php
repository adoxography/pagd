<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphGlossesMorphemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Morph_Glosses_Morphemes', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            // Foreign keys
            $table->unsignedInteger('gloss_id');
            $table->unsignedInteger('morpheme_id');

            // Constraints
            $table->foreign('gloss_id')->references('id')->on('Morph_Glosses');
            $table->foreign('morpheme_id')->references('id')->on('Morph_Morphemes');
            $table->index(['gloss_id', 'morpheme_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Morph_Glosses_Morphemes');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNomStructuresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Nom_Structures', function(Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pronominalFeature_id')->nullable();
            $table->unsignedInteger('nominalFeature_id')->nullable();
            $table->unsignedInteger('paradigm_id');
            $table->unsignedInteger('mode_id');

            $table->foreign('pronominalFeature_id')->references('id')->on('Word_Features');
            $table->foreign('nominalFeature_id')->references('id')->on('Word_Features');
            $table->foreign('paradigm_id')->references('id')->on('Nom_Paradigms');
            $table->foreign('mode_id')->references('id')->on('Nom_Modes');
            $table->unique(['pronominalFeature_id', 'nominalFeature_id', 'paradigm_id', 'mode_id'], 'nominal_structures_unique');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Nom_Structures');
    }
}

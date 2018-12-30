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
        Schema::create('nom_structures', function(Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pronominal_feature_id')->nullable();
            $table->unsignedInteger('nominal_feature_id')->nullable();
            $table->unsignedInteger('paradigm_id');

            $table->foreign('pronominal_feature_id')->references('id')->on('word_features');
            $table->foreign('nominal_feature_id')->references('id')->on('word_features');
            $table->foreign('paradigm_id')->references('id')->on('nom_paradigms');
            $table->unique(['pronominal_feature_id', 'nominal_feature_id', 'paradigm_id'], 'nominal_structures_unique');

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
        Schema::dropIfExists('nom_structures');
    }
}

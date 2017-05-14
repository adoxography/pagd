<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNomFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Nom_Features', function(Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->unsignedInteger('featureType_id');

            $table->foreign('featureType_id')->references('id')->on('Nom_FeatureTypes');
            $table->unique(['name', 'featureType_id']);
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
        Schema::dropIfExists('Nom_Features');
    }
}

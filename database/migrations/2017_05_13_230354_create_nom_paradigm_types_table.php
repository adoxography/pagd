<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNomParadigmTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Nom_ParadigmTypes', function(Blueprint $table) {
            // Primary key
            $table->increments('id');
            $table->string('name')->unique();

            // Booleans
            $table->boolean('hasPronominalFeature');
            $table->boolean('hasNominalFeature');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Nom_ParadigmTypes');
    }
}

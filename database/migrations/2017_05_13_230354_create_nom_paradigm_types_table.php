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
        Schema::create('nom_paradigm_types', function(Blueprint $table) {
            // Primary key
            $table->increments('id');
            $table->string('name')->unique();

            // Booleans
            $table->boolean('has_pronominal_feature');
            $table->boolean('has_nominal_feature');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nom_paradigm_types');
    }
}

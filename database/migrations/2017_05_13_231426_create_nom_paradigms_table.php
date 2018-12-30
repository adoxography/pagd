<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNomParadigmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nom_paradigms', function(Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('paradigm_type_id');

            $table->timestamps();

            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade');
            $table->foreign('paradigm_type_id')->references('id')->on('nom_paradigm_types');
            $table->unique(['name', 'language_id', 'paradigm_type_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nom_paradigms');
    }
}

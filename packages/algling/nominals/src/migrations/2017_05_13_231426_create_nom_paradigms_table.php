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
        Schema::create('Nom_Paradigms', function(Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('paradigmType_id');

            $table->timestamp('hidden_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('language_id')->references('id')->on('Languages');
            $table->foreign('paradigmType_id')->references('id')->on('Nom_ParadigmTypes');
            $table->unique(['name', 'language_id', 'paradigmType_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Nom_Paradigms');
    }
}

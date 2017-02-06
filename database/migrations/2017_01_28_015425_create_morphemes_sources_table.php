<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphemesSourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Morphemes_Sources', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->unsignedInteger('source_id')->index();
            $table->unsignedInteger('morpheme_id')->index();
            $table->string('extraInfo')->nullable();
            $table->timestamps();

            $table->foreign('source_id')->references('id')->on('Sources');
            $table->foreign('morpheme_id')->references('id')->on('Morphemes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Morphemes_Sources');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInitialChangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('InitialChanges', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('disambiguator')->default(1);
            $table->unsignedInteger('morpheme_id');
            $table->string('change');

            $table->timestamps();

            $table->unique(['morpheme_id', 'disambiguator']);
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
        Schema::dropIfExists('InitialChanges');
    }
}

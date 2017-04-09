<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGlossesMorphemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Glosses_Morphemes', function(Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('gloss_id');
            $table->unsignedInteger('morpheme_id');

            $table->foreign('gloss_id')->references('id')->on('Glosses');
            $table->foreign('morpheme_id')->references('id')->on('Morphemes');
        });

        Schema::table('Morphemes', function(Blueprint $table) {
            $table->string('gloss');
            $table->unsignedInteger('gloss_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Glosses_Morphemes');

        Schema::table('Morphemes', function(Blueprint $table) {
            $table->dropColumn('gloss');
        });
    }
}

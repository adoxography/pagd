<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveOldGlossSystem extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Morphemes', function(Blueprint $table) {
            $table->dropForeign('Morphemes_gloss_id_foreign');
            $table->dropColumn('gloss_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Morphemes', function(Blueprint $table) {
            $table->unsignedInteger('gloss_id');
            $table->foreign('gloss_id')->references('id')->on('Glosses');
        });
    }
}

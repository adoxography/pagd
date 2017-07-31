<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TransitionArgumentsToFeatures extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Verb_Structures', function(Blueprint $table) {
            $table->dropForeign(['subject_id']);
            $table->dropForeign(['primaryObject_id']);
            $table->dropForeign(['secondaryObject_id']);
        });

        Schema::disableForeignKeyConstraints();

        Schema::table('Verb_Structures', function(Blueprint $table) {
            $table->foreign('subject_id')->references('id')->on('Word_Features');
            $table->foreign('primaryObject_id')->references('id')->on('Word_Features');
            $table->foreign('secondaryObject_id')->references('id')->on('Word_Features');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

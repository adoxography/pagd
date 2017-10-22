<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDeletedToReflexes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Phon_Reflexes', function (Blueprint $table) {
            $table->boolean('deleted')->default(false);
            $table->dropForeign(['reflex_id']);
            $table->unsignedInteger('reflex_id')->nullable()->change();

            $table->integer('language_id')->unsigned();
            $table->foreign('language_id')->references('id')->on('Languages');
        });

        Schema::disableForeignKeyConstraints();

        Schema::table('Phon_PaParents', function (Blueprint $table) {
            $table->integer('language_id')->unsigned();

            $table->foreign('language_id')->references('id')->on('Languages');
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
        Schema::table('Phon_Reflexes', function (Blueprint $table) {
            $table->dropColumn('deleted');
            $table->dropForeign(['language_id']);
            $table->dropColumn('language_id');

            $table->unsignedInteger('reflex_id')->change();
            $table->foreign('reflex_id')->references('id')->on('Phon_Phonemes');
        });

        Schema::table('Phon_PaParents', function (Blueprint $table) {
            $table->dropForeign(['language_id']);
            $table->dropColumn('language_id');
        });
    }
}

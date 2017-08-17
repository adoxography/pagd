<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCascadeToLanguageData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $tables = ['Morph_Morphemes', 'Word_Forms', 'Nom_Paradigms', 'Rules', 'Phon_Phonemes', 'SS_Datapoints', 'Audio', 'Word_Gaps'];

        foreach ($tables as $table) {
            Schema::table($table, function (Blueprint $table) {
                $table->dropForeign(['language_id']);
                $table->foreign('language_id')->references('id')->on('Languages')->onDelete('cascade');
            });
        }
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

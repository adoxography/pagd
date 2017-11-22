<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class IncludeDeletedAtInMorphemeDisambiguatorIndex extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Morph_Morphemes', function (Blueprint $table) {
            $table->dropUnique(['language_id', 'name', 'disambiguator']);
            $table->unique(['language_id', 'name', 'disambiguator', 'deleted_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Morph_Morphemes', function (Blueprint $table) {
            $table->dropUnique(['language_id', 'name', 'disambiguator', 'deleted_at']);
            $table->unique(['language_id', 'name', 'disambiguator']);
        });
    }
}

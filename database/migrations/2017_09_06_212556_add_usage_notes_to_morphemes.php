<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUsageNotesToMorphemes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Morph_Morphemes', function (Blueprint $table) {
            $table->text('usageNotes')->nullable();
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
            $table->dropColumn('usageNotes');
        });
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPaParentToPhonemes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Phon_Phonemes', function(Blueprint $table) {
            $table->unsignedInteger('paParent_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Phon_Phonemes', function(Blueprint $table) {
            $table->dropColumn('paParent_id');
        });
    }
}

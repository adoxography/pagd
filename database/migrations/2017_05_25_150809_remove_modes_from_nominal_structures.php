<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveModesFromNominalStructures extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Nom_Structures', function(Blueprint $table) {
            $table->dropForeign(['mode_id']);
            $table->dropColumn('mode_id');
        });

        Schema::drop('Nom_Modes');
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

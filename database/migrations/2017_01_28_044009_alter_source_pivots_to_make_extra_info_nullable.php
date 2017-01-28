<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterSourcePivotsToMakeExtraInfoNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Morphemes_Sources', function(Blueprint $table) {
            $table->string('extraInfo')->nullable()->change();
        });        

        Schema::table('Sources_Forms', function(Blueprint $table) {
            $table->string('extraInfo')->nullable()->change();
        });
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

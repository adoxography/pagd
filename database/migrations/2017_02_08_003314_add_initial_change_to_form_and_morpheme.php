<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddInitialChangeToFormAndMorpheme extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Forms', function (Blueprint $table) {
            $table->boolean('initialChange')->default(0);
        });

        Schema::table('Morphemes', function(Blueprint $table) {
            $table->string('alternateName')->nullable();
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

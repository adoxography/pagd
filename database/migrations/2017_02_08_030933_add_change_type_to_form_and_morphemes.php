<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddChangeTypeToFormAndMorphemes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Forms', function (Blueprint $table) {
            $table->unsignedInteger('changeType_id')->nullable();
            $table->foreign('changeType_id')->references('id')->on('ChangeTypes');
        });

        Schema::table('Morphemes', function (Blueprint $table) {
            $table->unsignedInteger('changeType_id')->nullable();
            $table->foreign('changeType_id')->references('id')->on('ChangeTypes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Forms', function (Blueprint $table) {
            $table->dropForeign(['changeType_id']);
        });

        Schema::table('Morphemes', function (Blueprint $table) {
            $table->dropForeign(['changeType_id']);
        });
    }
}

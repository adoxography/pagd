<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLanguageIdToExamples extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::table('Word_Examples', function (Blueprint $table) {
            $table->integer('language_id')->unsigned()->nullable();

            $table->dropUnique(['name', 'form_id', 'deleted_at']);
            $table->dropForeign(['form_id']);
            $table->integer('form_id')->unsigned()->nullable()->change();
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

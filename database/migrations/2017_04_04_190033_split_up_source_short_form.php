<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SplitUpSourceShortForm extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Sources', function(Blueprint $table) {
            $table->string('author');
            $table->smallInteger('year');
            $table->char('disambiguator', 2)->nullable();
            $table->string('short')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Sources', function(Blueprint $table) {
            $table->dropColumn(['author', 'year', 'disambiguator']);
        });
    }
}

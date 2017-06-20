<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNotesToGroups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Groups', function(Blueprint $table) {
            $table->text('publicNotes')->nullable();
            $table->text('privateNotes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Groups', function(Blueprint $table) {
            $table->dropColumn('publicNotes');
            $table->dropColumn('privateNotes');
        });
    }
}

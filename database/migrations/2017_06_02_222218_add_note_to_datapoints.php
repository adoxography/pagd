<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNoteToDatapoints extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('SS_Datapoints', function(Blueprint $table) {
            $table->renameColumn('notes', 'comments');
        });

        Schema::table('SS_Datapoints', function(Blueprint $table) {
            $table->text('note');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('SS_Datapoints', function(Blueprint $table) {
            $table->dropColumn('notes');
        });

        Schema::table('SS_Datapoints', function(Blueprint $table) {
            $table->renameColumn('comments', 'notes');
        });
    }
}

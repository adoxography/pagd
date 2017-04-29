<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSoftDeletes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $tableNames = ['Languages', 'Sources', 'Rules', 'Groups'];

        Schema::table('Languages', function(Blueprint $table) {
            $table->dropColumn('verified');
        });

        foreach($tableNames as $tableName) {
            Schema::table($tableName, function(Blueprint $table) {
                $table->softDeletes();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $tableNames = ['Languages', 'Sources', 'Rules', 'Groups'];

        foreach($tableNames as $tableName) {
            Schema::table($tableName, function(Blueprint $table) {
                $table->dropColumn('deleted_at');
            });
        }
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddHiddenAtField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $tableNames = ['Languages', 'Rules'];

        foreach($tableNames as $tableName) {
            Schema::table($tableName, function(Blueprint $table) {
                $table->timestamp('hidden_at')->nullable();
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
        $tableNames = ['Languages', 'Rules'];

        foreach($tableNames as $tableName) {
            Schema::table($tableName, function(Blueprint $table) {
                $table->dropColumn('hidden_at');
            });
        }
    }
}

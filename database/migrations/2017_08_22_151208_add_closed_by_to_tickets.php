<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddClosedByToTickets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Tickets', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('isClosed');

            $table->renameColumn('user_id', 'openedBy_id');
            $table->foreign('openedBy_id')->references('id')->on('users');

            $table->unsignedInteger('closedBy_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Tickets', function (Blueprint $table) {
            $table->dropForeign(['openedBy_id']);
            $table->dropColumn('closedBy_id');
            $table->boolean('isClosed')->default(false);
            $table->renameColumn('openedBy_id', 'user_id');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }
}

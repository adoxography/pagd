<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTicketTypesToTickets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::table('Tickets', function(Blueprint $table) {
            $table->unsignedInteger('ticketType_id');

            $table->foreign('ticketType_id')->references('id')->on('TicketTypes');
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
        Schema::table('Tickets', function(Blueprint $table) {
            $table->dropForeign(['ticketType_id']);
            $table->dropColumn('ticketType_id');
        });
    }
}

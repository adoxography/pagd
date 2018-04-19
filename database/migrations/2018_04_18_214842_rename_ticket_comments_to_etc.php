<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameTicketCommentsToEtc extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Tickets', function (Blueprint $table) {
            $table->renameColumn('comments', 'etc');
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
            $table->renameColumn('etc', 'comments');
        });
    }
}

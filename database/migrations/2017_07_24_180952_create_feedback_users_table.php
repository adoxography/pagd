<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeedbackUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticket_user', function(Blueprint $table) {
            $table->unsignedInteger('ticket_id');
            $table->unsignedInteger('user_id');

            $table->unique(['ticket_id', 'user_id']);
            $table->foreign('ticket_id')->references('id')->on('Tickets');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feedback_user');
    }
}

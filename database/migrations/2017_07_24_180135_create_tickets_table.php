<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('opened_by_id');
            $table->unsignedInteger('closed_by_id')->nullable();

            $table->string('url')->nullable();
            $table->string('title');
            $table->text('current')->nullable();
            $table->text('desired')->nullable();
            $table->text('etc')->nullable();
            $table->text('response')->nullable();
            $table->boolean('is_closed')->default(false);
            $table->boolean('is_urgent')->default(false);
            $table->unsignedInteger('ticket_type_id')->default(0);

            $table->foreign('ticket_type_id')->references('id')->on('ticket_types');
            $table->foreign('opened_by_id')->references('id')->on('users');

            $table->timestamps();
            $table->timestamp('closed_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feedback');
    }
}

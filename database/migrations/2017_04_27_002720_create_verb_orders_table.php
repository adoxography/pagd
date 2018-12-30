<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVerbOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('verb_orders', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            $table->string('name')->unique();
            $table->text('description')->nullable();
            $table->integer('position')->default(-1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('verb_orders');
    }
}

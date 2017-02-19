<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Flags', function ($table) {
            $table->increments('id');
            $table->string('flagged_type');
            $table->integer('flagged_id');
            $table->integer('level');
            $table->integer('user_id')->nullable();
            $table->timestamps();

            $table->index(['flagged_id', 'flagged_type']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Flags');
    }
}

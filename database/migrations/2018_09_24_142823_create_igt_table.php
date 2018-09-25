<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIgtTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('IGT', function (Blueprint $table) {
        	$table->engine = 'InnoDB';

            $table->increments('id');
            $table->unsignedInteger('language_id');
            $table->text('publicNotes')->nullable();
            $table->text('privateNotes')->nullable();
            $table->timestamps();

            $table->foreign('language_id')->references('id')->on('Languages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('IGT');
    }
}

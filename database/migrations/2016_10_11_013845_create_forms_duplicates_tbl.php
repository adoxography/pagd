<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormsDuplicatesTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Forms_Duplicates', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->unsignedInteger('form_id')->index();
            $table->unsignedInteger('duplicate_id')->index();
            $table->timestamps();

            $table->foreign('form_id')->references('id')->on('Forms');
            $table->foreign('duplicate_id')->references('id')->on('Forms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Forms_Duplicates');
    }
}

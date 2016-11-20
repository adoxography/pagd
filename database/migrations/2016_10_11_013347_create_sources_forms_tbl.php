<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSourcesFormsTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Sources_Forms', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->unsignedInteger('source_id')->index();
            $table->unsignedInteger('form_id')->index();
            $table->timestamps();

            $table->foreign('source_id')->references('id')->on('Sources');
            $table->foreign('form_id')->references('id')->on('Forms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Sources_Forms');
    }
}

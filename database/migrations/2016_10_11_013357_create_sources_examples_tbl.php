<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSourcesExamplesTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Sources_Examples', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->unsignedInteger('source_id')->index();
            $table->unsignedInteger('example_id')->index();
            $table->string('extraInfo')->nullable();
            $table->timestamps();

            $table->foreign('source_id')->references('id')->on('Sources');
            $table->foreign('example_id')->references('id')->on('Examples');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Sources_Examples');
    }
}

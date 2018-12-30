<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSourceableTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sourceables', function ($table) {
            $table->increments('id');
            $table->unsignedInteger('source_id')->index();
            $table->unsignedInteger('sourceable_id')->index();
            $table->string('sourceable_type')->index();
            $table->string('extra_info')->nullable();
            $table->string('description')->nullable();

            $table->timestamps();

            $table->foreign('source_id')->references('id')->on('sources');
            $table->unique(['sourceable_type', 'sourceable_id', 'source_id', 'extra_info'], 'unique_sourceables');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sourceables');
    }
}

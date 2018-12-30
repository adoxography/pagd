<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIGTLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('igt_lines', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('igt_id');
            $table->unsignedInteger('type_id');
            $table->text('text');
            $table->timestamps();

            $table->foreign('igt_id')->references('id')->on('igts');
            $table->foreign('type_id')->references('id')->on('igt_line_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('igt_lines');
    }
}

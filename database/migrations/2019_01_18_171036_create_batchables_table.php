<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBatchablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batchables', function (Blueprint $table) {
            $table->unsignedInteger('batch_upload_id');
            $table->unsignedInteger('batchable_id');

            $table->primary(['batch_upload_id', 'batchable_id']);
            $table->foreign('batch_upload_id')
                  ->references('id')->on('batch_uploads')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batchables');
    }
}

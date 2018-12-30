<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSSDatapointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ss_datapoints', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('value_id');
            $table->unsignedInteger('variable_id');
            $table->text('comments')->nullable();
            $table->text('note')->nullable();

            $table->boolean('is_extended')->default(false);
            $table->boolean('is_extension')->default(false);

            $table->timestamps();

            // Constraints
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade');
            $table->foreign('value_id')->references('id')->on('ss_values');
            $table->foreign('variable_id')->references('id')->on('ss_variables');
            $table->unique(['language_id', 'variable_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ss_datapoints');
    }
}

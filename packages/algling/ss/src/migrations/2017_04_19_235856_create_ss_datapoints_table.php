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
        Schema::create('SS_Datapoints', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('value_id');
            $table->unsignedInteger('variable_id');
            $table->text('notes')->nullable();

            $table->timestamps();

            // Constraints
            $table->foreign('language_id')->references('id')->on('Languages');
            $table->foreign('value_id')->references('id')->on('SS_Values');
            $table->foreign('variable_id')->references('id')->on('SS_Variables');
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
        Schema::dropIfExists('SS_Datapoints');
    }
}

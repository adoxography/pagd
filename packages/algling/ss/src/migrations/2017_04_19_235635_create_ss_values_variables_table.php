<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSSValuesVariablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('SS_Values_Variables', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->unsignedInteger('value_id');
            $table->unsignedInteger('variable_id');

            $table->timestamps();

            // Constraints
            $table->foreign('value_id')->references('id')->on('SS_Values');
            $table->foreign('variable_id')->references('id')->on('SS_Variables');
            $table->unique(['value_id', 'variable_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('SS_Values_Variables');
    }
}

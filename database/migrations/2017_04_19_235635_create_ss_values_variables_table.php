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
        Schema::create('ss_values_variables', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->unsignedInteger('value_id');
            $table->unsignedInteger('variable_id');

            $table->timestamps();

            // Constraints
            $table->foreign('value_id')->references('id')->on('ss_values');
            $table->foreign('variable_id')->references('id')->on('ss_variables');
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
        Schema::dropIfExists('ss_values_variables');
    }
}

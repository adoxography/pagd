<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWordFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Word_Features', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            $table->string('name')->unique();

            $table->string('person')->nullable();
            $table->integer('obviativeCode')->nullable();
            $table->integer('number')->nullable();

            $table->unique(['person', 'obviativeCode', 'number']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Word_Features');
    }
}

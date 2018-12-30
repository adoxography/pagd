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
        Schema::create('word_features', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            $table->string('name')->unique();

            $table->string('person')->nullable();
            $table->integer('obviative_code')->nullable();
            $table->integer('number')->nullable();

            $table->unique(['person', 'obviative_code', 'number']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('word_features');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVerbArgumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Verb_Arguments', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            $table->string('name')->unique();
            $table->string('person');

            $table->integer('obviativeCode')->nullable();
            $table->integer('number')->nullable();

            $table->unique(['person', 'obviativeCode', 'number']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Verb_Arguments');
    }
}

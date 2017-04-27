<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVerbStructuresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Verb_Structures', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('class_id');
            $table->unsignedInteger('subject_id');
            $table->unsignedInteger('primaryObject_id')->nullable();
            $table->unsignedInteger('secondaryObject_id')->nullable();
            $table->unsignedInteger('order_id');
            $table->unsignedInteger('mode_id');

            // Booleans
            $table->boolean('isNegative');
            $table->boolean('isDiminutive');
            $table->boolean('isAbsolute')->nullable();

            $table->string('head')->nullable();
            $table->string('subclass')->nullable();

            $table->timestamps();

            // Constraints
            $table->foreign('class_id')->references('id')->on('Verb_Classes');
            $table->foreign('subject_id')->references('id')->on('Verb_Arguments');
            $table->foreign('primaryObject_id')->references('id')->on('Verb_Arguments');
            $table->foreign('secondaryObject_id')->references('id')->on('Verb_Arguments');
            $table->foreign('order_id')->references('id')->on('Verb_Orders');
            $table->foreign('mode_id')->references('id')->on('Verb_Modes');
            $table->unique(['class_id', 'subject_id', 'primaryObject_id', 'secondaryObject_id', 'order_id', 'mode_id', 'isNegative', 'isDiminutive', 'isAbsolute', 'head'], 'verb_structures_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Verb_Structures');
    }
}

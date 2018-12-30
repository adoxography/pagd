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
        Schema::create('verb_structures', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('class_id');
            $table->unsignedInteger('subject_id');
            $table->unsignedInteger('primary_object_id')->nullable();
            $table->unsignedInteger('secondary_object_id')->nullable();
            $table->unsignedInteger('order_id');
            $table->unsignedInteger('mode_id');

            // Booleans
            $table->boolean('is_negative');
            $table->boolean('is_diminutive');
            $table->boolean('is_absolute')->nullable();

            $table->string('head')->nullable();
            $table->string('subclass')->nullable();

            $table->timestamps();

            // Constraints
            $table->foreign('class_id')->references('id')->on('verb_classes');
            $table->foreign('subject_id')->references('id')->on('word_features');
            $table->foreign('primary_object_id')->references('id')->on('word_features');
            $table->foreign('secondary_object_id')->references('id')->on('word_features');
            $table->foreign('order_id')->references('id')->on('verb_orders');
            $table->foreign('mode_id')->references('id')->on('verb_modes');
            $table->unique(['class_id', 'subject_id', 'primary_object_id', 'secondary_object_id', 'order_id', 'mode_id', 'is_negative', 'is_diminutive', 'is_absolute', 'head'], 'verb_structures_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('verb_structures');
    }
}

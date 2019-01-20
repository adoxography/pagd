<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWordFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('word_forms', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('phonemic_form')->nullable();
            $table->string('morphemic_form')->nullable();

            // Foreign Keys
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('parent_id')->nullable();
            $table->unsignedInteger('change_type_id')->nullable();
            $table->morphs('structure');

            // Text fields
            $table->text('historical_notes')->nullable();
            $table->text('allomorphy_notes')->nullable();
            $table->text('usage_notes')->nullable();
            $table->text('private_notes')->nullable();

            // Timestamps
            $table->timestamps();

            $table->boolean('complete')->default(0);

            // Constraints
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade');
            $table->unique(['name', 'language_id', 'structure_type', 'structure_id'], 'word_forms_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('word_forms');
    }
}

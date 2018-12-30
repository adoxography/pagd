<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWordExamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('word_examples', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('translation');
            $table->string('phonemic_form')->nullable();
            $table->string('morphemic_form')->nullable();

            // Foreign keys
            $table->unsignedInteger('form_id')->nullable();
            $table->unsignedInteger('parent_id')->nullable();
            $table->unsignedInteger('language_id')->nullable();

            // Text fields
            $table->text('public_notes')->nullable();
            $table->text('private_notes')->nullable();

            // Timestamps
            $table->timestamps();

            $table->boolean('complete')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('word_examples');
    }
}

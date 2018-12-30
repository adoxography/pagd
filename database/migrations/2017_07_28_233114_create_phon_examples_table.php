<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhonExamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phon_examples', function(Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->string('translation');
            $table->string('phonemic_representation')->nullable();

            $table->text('public_notes')->nullable();
            $table->text('private_notes')->nullable();

            $table->unsignedInteger('language_id');
            $table->unsignedInteger('parent_id')->nullable();

            $table->timestamps();

            $table->foreign('language_id')->references('id')->on('languages');
            $table->unique(['language_id', 'name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phon_examples');
    }
}

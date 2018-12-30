<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReflexesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phon_reflexes', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Strings
            $table->string('environment')->nullable();

            // Foreign keys
            $table->unsignedInteger('reflex_id');
            $table->unsignedInteger('parent_id');

            // Text fields
            $table->text('public_notes')->nullable();
            $table->text('private_notes')->nullable();

            // Timestamps
            $table->timestamps();

            // Constraints
            $table->foreign('reflex_id')->references('id')->on('phon_phonemes');
            $table->foreign('parent_id')->references('id')->on('phon_phonemes');
            $table->unique(['reflex_id', 'parent_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phon_reflexes');
    }
}

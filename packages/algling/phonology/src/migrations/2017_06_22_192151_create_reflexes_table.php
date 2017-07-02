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
        Schema::create('Phon_Reflexes', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Strings
            $table->string('environment')->nullable();

            // Foreign keys
            $table->unsignedInteger('reflex_id');
            $table->unsignedInteger('parent_id');

            // Text fields
            $table->text('publicNotes')->nullable();
            $table->text('privateNotes')->nullable();

            // Timestamps
            $table->timestamps();
            $table->softDeletes();
            $table->timestamp('hidden_at')->nullable();

            // Constraints
            $table->foreign('reflex_id')->references('id')->on('Phon_Phonemes');
            $table->foreign('parent_id')->references('id')->on('Phon_Phonemes');
            $table->unique(['reflex_id', 'parent_id', 'deleted_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Reflexes');
    }
}

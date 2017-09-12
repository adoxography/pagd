<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhonemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Phon_Phonemes', function (Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Names
            $table->string('algoName');
            $table->string('ipaName')->nullable();
            $table->string('orthoName')->nullable();

            // Notes
            $table->text('phoneticNotes')->nullable();
            $table->text('orthoNotes')->nullable();
            $table->text('privateNotes')->nullable();

            // Booleans
            $table->boolean('isMarginal')->default(false);

            // Foreign keys
            $table->unsignedInteger('language_id');
            $table->morphs('featurable');

            // Timestamps
            $table->timestamps();
            $table->softDeletes();
            $table->timestamp('hidden_at')->nullable();

            // Constraints
            $table->foreign('language_id')->references('id')->on('Languages');
            $table->unique(['algoName', 'language_id', 'deleted_at']);
            $table->unique(['ipaName', 'language_id', 'deleted_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Phonemes');
    }
}

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
        Schema::create('phon_phonemes', function (Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Names
            $table->string('algo_name');
            $table->string('ipa_name')->nullable();
            $table->string('ortho_name')->nullable();

            // Notes
            $table->text('phonetic_notes')->nullable();
            $table->text('ortho_notes')->nullable();
            $table->text('private_notes')->nullable();

            // Booleans
            $table->boolean('is_marginal')->default(false);

            $table->boolean('is_archiphoneme')->default(false);
            $table->string('archiphoneme_description')->nullable();

            // Foreign keys
            $table->unsignedInteger('language_id');
            $table->morphs('featurable');

            // Timestamps
            $table->timestamps();

            // Constraints
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade');
            $table->unique(['algo_name', 'language_id']);
            $table->unique(['ipa_name', 'language_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phon_phonemes');
    }
}

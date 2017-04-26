<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphMorphemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Morph_Morphemes', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('gloss');

            // Foreign keys
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('slot_id');
            $table->unsignedInteger('parent_id')->nullable();
            $table->unsignedInteger('changeType_id')->nullable();

            // Text fields
            $table->text('historicalNotes')->nullable();
            $table->text('allomorphyNotes')->nullable();
            $table->text('privateNotes')->nullable();

            // Timestamps
            $table->timestamps();
            $table->timestamp('hidden_at')->nullable();
            $table->softDeletes();

            // Other
            $table->integer('disambiguator');
            $table->boolean('hasDuplicates');

            // Constraints
            $table->foreign('language_id')->references('id')->on('Languages');
            $table->foreign('slot_id')->references('id')->on('Morph_Slots');
            $table->foreign('changeType_id')->references('id')->on('ChangeTypes');
            $table->unique(['language_id', 'name', 'disambiguator']);
            $table->unique(['language_id', 'name', 'slot_id', 'gloss', 'deleted_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Morph_Morphemes');
    }
}

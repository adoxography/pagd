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
        Schema::create('morph_morphemes', function(Blueprint $table) {
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
            $table->unsignedInteger('change_type_id')->nullable();

            // Text fields
            $table->text('historical_notes')->nullable();
            $table->text('allomorphy_notes')->nullable();
            $table->text('private_notes')->nullable();
            $table->text('usage_notes')->nullable();

            // Timestamps
            $table->timestamps();

            // Other
            $table->integer('disambiguator');
            $table->boolean('has_duplicates')->default(false);

            // Constraints
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade');
            $table->foreign('slot_id')->references('id')->on('morph_slots');
            $table->foreign('change_type_id')->references('id')->on('change_types');
            $table->unique(['language_id', 'name', 'disambiguator']);
            $table->unique(['language_id', 'name', 'slot_id', 'gloss']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('morph_morphemes');
    }
}

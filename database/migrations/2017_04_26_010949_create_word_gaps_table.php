<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWordGapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('word_gaps', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('language_id');
            $table->morphs('structure');

            // Text fields
            $table->text('historical_notes')->nullable();
            $table->text('private_notes')->nullable();
            $table->text('usage_notes')->nullable();

            // Timestamps
            $table->timestamps();

            // Constraints
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade');
            $table->unique(['language_id', 'structure_id', 'structure_type']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('word_gaps');
    }
}

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
        Schema::create('Word_Gaps', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('language_id');
            $table->morphs('structure');

            // Text fields
            $table->text('historicalNotes')->nullable();
            $table->text('privateNotes')->nullable();

            // Timestamps
            $table->timestamps();
            $table->timestamp('hidden_at')->nullable();
            $table->softDeletes();

            // Constraints
            $table->foreign('language_id')->references('id')->on('Languages');
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
        Schema::dropIfExists('Word_Gaps');
    }
}

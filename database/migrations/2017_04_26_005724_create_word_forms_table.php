<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWordFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Word_Forms', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('phonemicForm')->nullable();
            $table->string('morphemicForm')->nullable();

            // Foreign Keys
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('parent_id')->nullable();
            $table->unsignedInteger('changeType_id')->nullable();
            $table->morphs('structure');

            // Text fields
            $table->text('historicalNotes')->nullable();
            $table->text('allomorphyNotes')->nullable();
            $table->text('usageNotes')->nullable();
            $table->text('privateNotes')->nullable();

            // Timestamps
            $table->timestamp('hidden_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->boolean('complete')->default(0);

            // Constraints
            $table->foreign('language_id')->references('id')->on('Languages');
            $table->foreign('changeType_id')->references('id')->on('ChangeTypes');
            $table->unique(['name', 'language_id', 'structure_type', 'structure_id', 'deleted_at'], 'word_forms_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Word_Forms');
    }
}

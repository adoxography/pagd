<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWordExamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Word_Examples', function(Blueprint $table) {

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('name');
            $table->string('translation');
            $table->string('phonemicForm')->nullable();
            $table->string('morphemicForm')->nullable();

            // Foreign keys
            $table->unsignedInteger('form_id');
            $table->unsignedInteger('parent_id')->nullable();

            // Text fields
            $table->text('publicNotes')->nullable();
            $table->text('privateNotes')->nullable();

            // Timestamps
            $table->timestamps();
            $table->timestamp('hidden_at')->nullable();
            $table->softDeletes();

            $table->boolean('complete')->default(0);

            // Constraints
            $table->foreign('form_id')->references('id')->on('Word_Forms');
            $table->unique(['name', 'form_id', 'deleted_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Word_Examples');
    }
}

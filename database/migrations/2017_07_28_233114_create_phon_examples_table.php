<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhonExamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Phon_Examples', function(Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->string('translation');
            $table->string('phonemicRepresentation')->nullable();

            $table->text('publicNotes')->nullable();
            $table->text('privateNotes')->nullable();

            $table->unsignedInteger('language_id');
            $table->unsignedInteger('parent_id')->nullable();

            $table->timestamps();
            $table->softDeletes();
            $table->timestamp('hidden_at')->nullable();

            $table->foreign('language_id')->references('id')->on('Languages');
            $table->unique(['language_id', 'name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Examples');
    }
}

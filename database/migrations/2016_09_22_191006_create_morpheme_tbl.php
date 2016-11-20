<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphemeTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Morphemes', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->unsignedInteger('language_id');
            $table->string('name',100);
            $table->unsignedInteger('gloss_id');
            $table->unsignedInteger('slot_id');
            $table->unsignedInteger('parent_id')->nullable();
            $table->text('historicalNotes')->nullable();
            $table->text('allomorphyNotes')->nullable();
            $table->text('comments')->nullable();
            $table->timestamps();

            $table->foreign('language_id')->references('id')->on('Languages');
            $table->foreign('gloss_id')->references('id')->on('Glosses');
            $table->foreign('slot_id')->references('id')->on('Slots');
            $table->foreign('parent_id')->references('id')->on('Morphemes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Morphemes');
    }
}

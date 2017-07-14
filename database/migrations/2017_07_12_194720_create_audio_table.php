<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAudioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Audio', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('language_id');
            $table->string('name');
            $table->string('fileName');
            $table->text('comments')->nullable();

            $table->timestamps();

            $table->foreign('language_id')->references('id')->on('Languages');
            $table->unique(['language_id', 'name'], 'audio_n_unique');
            $table->unique(['language_id', 'fileName'], 'audio_fn_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Audio');
    }
}

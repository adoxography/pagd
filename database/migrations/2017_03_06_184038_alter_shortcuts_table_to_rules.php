<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterShortcutsTableToRules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Rules', function(Blueprint $table) {
            $table->increments('id');
            $table->string('abv');
            $table->string('rule');
            $table->string('name');

            $table->unsignedInteger('language_id');
            $table->text('privateComments')->nullable();
            $table->text('publicComments')->nullable();

            $table->timestamps();

            $table->unique(['abv', 'language_id']);
            $table->unique(['name', 'language_id']);
            $table->foreign('language_id')->references('id')->on('Languages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Rules');
    }
}

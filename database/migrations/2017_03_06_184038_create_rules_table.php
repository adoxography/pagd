<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rules', function(Blueprint $table) {
            $table->increments('id');
            $table->string('abv');
            $table->string('rule');
            $table->string('name');

            $table->unsignedInteger('language_id');
            $table->unsignedInteger('type_id')->nullable();
            $table->text('private_comments')->nullable();
            $table->text('public_comments')->nullable();

            $table->timestamps();

            $table->unique(['abv', 'language_id']);
            $table->unique(['name', 'language_id']);
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rules');
    }
}

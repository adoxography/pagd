<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookmarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('Bookmarks');

        Schema::create('Bookmarks', function(Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->text('comment')->nullable();
            $table->morphs('bookmarkable');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Bookmarks');
    }
}

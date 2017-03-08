<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmptyFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('EmptyForms', function(Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('formType_id');
            $table->unsignedInteger('language_id');
            $table->text('comments')->nullable();
            $table->text('historicalNotes')->nullable();

            $table->timestamps();

            $table->foreign('formType_id')->references('id')->on('FormTypes');
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
        Schema::dropIfExists('EmptyForms');
    }
}

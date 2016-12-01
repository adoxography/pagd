<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Forms', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->unsignedInteger('language_id');
            $table->unsignedInteger('formType_id');
            $table->string('surfaceForm',100);
            $table->string('phoneticForm',100)->nullable();
            $table->string('morphemicForm',100)->nullable();
            $table->unsignedInteger('parent_id')->nullable();
            $table->text('historicalNotes')->nullable();
            $table->text('comments')->nullable();
            $table->boolean('verified')->default(0);
            $table->timestamps();

            $table->foreign('language_id')->references('id')->on('Languages');
            $table->foreign('formType_id')->references('id')->on('FormTypes');
            $table->foreign('parent_id')->references('id')->on('Forms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Forms');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormTypeTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('FormTypes', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->unsignedInteger('class_id');
            $table->unsignedInteger('subject_id');
            $table->unsignedInteger('primaryObject_id')->nullable();
            $table->unsignedInteger('secondaryObject_id')->nullable();
            $table->unsignedInteger('order_id');
            $table->unsignedInteger('mode_id');
            $table->boolean('isAbsolute')->nullable();
            $table->boolean('isDiminutive')->default(0);
            $table->boolean('isNegative')->default(0);
            $table->timestamps();
            
            $table->foreign('class_id')->references('id')->on('Classes');
            $table->foreign('subject_id')->references('id')->on('Arguments');
            $table->foreign('primaryObject_id')->references('id')->on('Arguments');
            $table->foreign('secondaryObject_id')->references('id')->on('Arguments');
            $table->foreign('order_id')->references('id')->on('Orders');
            $table->foreign('mode_id')->references('id')->on('Modes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('FormTypes');
    }
}

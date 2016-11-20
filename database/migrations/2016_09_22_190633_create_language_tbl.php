<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLanguageTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Languages', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('iso',3)->unique();
            $table->string('algoCode',3)->unique();
            $table->unsignedInteger('parent_id')->nullable();
            $table->unsignedInteger('group_id');
            $table->boolean('verified')->default(0);
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('Languages');
            $table->foreign('group_id')->references('id')->on('Groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Languages');
    }
}

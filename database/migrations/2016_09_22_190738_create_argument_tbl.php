<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArgumentTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Arguments', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->string('name',5)->unique();
            $table->string('person',2);
            $table->integer('obviativeCode')->nullable();
            $table->integer('number')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Arguments');
    }
}

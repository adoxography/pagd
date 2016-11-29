<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExampleTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Examples', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->string('name',100);
            $table->string('translation',100);
            $table->unsignedInteger('vStem_id');
            $table->unsignedInteger('form_id');
            $table->text('comments')->nullable();
            $table->timestamps();

            $table->foreign('form_id')->references('id')->on('Forms');
            $table->foreign('vStem_id')->references('id')->on('Morphemes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Examples');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSourceTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Sources', function (Blueprint $table) {
        	$table->engine = 'InnoDB';

            $table->increments('id');

            $table->string('author');
            $table->smallInteger('year');
            $table->char('disambiguator', 2)->nullable();
            $table->string('short',100)->nullable();
        	
            $table->text('long');
            $table->string('url')->nullable();
            $table->text('notes')->nullable();
            $table->text('summary')->nullable();
            
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
        Schema::dropIfExists('Sources');
    }
}

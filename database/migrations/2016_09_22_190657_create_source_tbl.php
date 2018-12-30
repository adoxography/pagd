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
        Schema::create('sources', function (Blueprint $table) {

        	$table->engine = 'InnoDB';

            $table->increments('id');

            $table->string('author');
            $table->string('year');
            $table->char('disambiguator', 2)->nullable();
        	
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
        Schema::dropIfExists('sources');
    }
}

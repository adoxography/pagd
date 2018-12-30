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
        Schema::create('languages', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('iso',3)->unique()->nullable();
            $table->string('algo_code',5)->unique();
            $table->unsignedInteger('parent_id')->nullable();
            $table->unsignedInteger('group_id');
            $table->boolean('verified')->default(0);
            $table->timestamps();
            $table->string('alternate_names')->nullable();
            $table->text('notes')->nullable();
            $table->boolean('reconstructed')->default(false);
            $table->integer('position')->default(-1);
            $table->text('inventory_notes')->nullable();
            $table->unsignedInteger('location_id')->nullable();

            $table->foreign('parent_id')->references('id')->on('languages');
            $table->foreign('group_id')->references('id')->on('groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('languages');
    }
}

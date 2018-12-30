<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
        	$table->engine = 'InnoDB';
        	
            $table->increments('id');
            $table->string('name',100);
            $table->string('aliases')->nullable();
            $table->text('description')->nullable();
            $table->integer('position')->default(-1);
            $table->unsignedInteger('parent_id')->nullable();
            $table->text('public_notes')->nullable();
            $table->text('private_notes')->nullable();
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
        Schema::dropIfExists('groups');
    }
}

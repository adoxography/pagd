<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExamplesMorphemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Examples_Morphemes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->unsignedInteger('example_id');
            $table->unsignedInteger('morpheme_id');
            $table->integer('position');
            $table->timestamps();
            
            $table->index(['example_id', 'morpheme_id', 'position']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Examples_Morphemes');
    }
}

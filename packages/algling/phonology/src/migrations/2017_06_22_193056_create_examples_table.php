<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Phon_Examples', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Strings
            $table->string('environment')->nullable();

            // Foreign keys
            $table->unsignedInteger('reflex_id');

            // Timestamps
            $table->timestamps();

            // Constraints
            $table->foreign('reflex_id')->references('id')->on('Phon_Reflexes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Examples');
    }
}

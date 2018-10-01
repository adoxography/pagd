<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsonantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Phon_Consonants', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('place_id');
            $table->unsignedInteger('manner_id');
            $table->unsignedInteger('voicing_id')->nullable();

            // Booleans
            $table->boolean('isRounded')->default(false);
            $table->boolean('isPalatalized')->default(false);
            $table->boolean('isGlottalized')->default(false);

            // Constraints
            $table->foreign('place_id')->references('id')->on('Phon_Places');
            $table->foreign('manner_id')->references('id')->on('Phon_Manners');
            $table->unique(['place_id', 'manner_id', 'voicing_id', 'isRounded', 'isPalatalized', 'isGlottalized'], 'phon_consontants_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Consonants');
    }
}

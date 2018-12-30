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
        Schema::create('phon_consonants', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('place_id')->nullable();
            $table->unsignedInteger('manner_id')->nullable();
            $table->unsignedInteger('voicing_id')->nullable();

            // Booleans
            $table->boolean('is_rounded')->default(false);
            $table->boolean('is_palatalized')->default(false);
            $table->boolean('is_glottalized')->default(false);

            // Constraints
            $table->foreign('place_id')->references('id')->on('phon_places');
            $table->foreign('manner_id')->references('id')->on('phon_manners');
            $table->unique(['place_id', 'manner_id', 'voicing_id', 'is_rounded', 'is_palatalized', 'is_glottalized'], 'phon_consontants_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phon_consonants');
    }
}

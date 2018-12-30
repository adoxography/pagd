<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClustersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phon_clusters', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('first_segment_id');
            $table->unsignedInteger('second_segment_id');

            // Constraints
            $table->foreign('first_segment_id')->references('id')->on('phon_phonemes');
            $table->foreign('second_segment_id')->references('id')->on('phon_phonemes');
            $table->unique(['first_segment_id', 'second_segment_id'], 'phon_clusters_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phon_clusters');
    }
}

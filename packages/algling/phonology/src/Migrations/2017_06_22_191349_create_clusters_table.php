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
        Schema::create('Phon_Clusters', function(Blueprint $table) {
            // Primary key
            $table->increments('id');

            // Foreign keys
            $table->unsignedInteger('firstSegment_id');
            $table->unsignedInteger('secondSegment_id');

            // Constraints
            $table->foreign('firstSegment_id')->references('id')->on('Phon_Phonemes');
            $table->foreign('secondSegment_id')->references('id')->on('Phon_Phonemes');
            $table->unique(['firstSegment_id', 'secondSegment_id'], 'phon_clusters_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Phon_Clusters');
    }
}

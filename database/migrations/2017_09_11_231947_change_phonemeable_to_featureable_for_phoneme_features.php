<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangePhonemeableToFeatureableForPhonemeFeatures extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('Phon_Phonemes', function (Blueprint $table) {
            $table->renameColumn('phonemeable_type', 'featureable_type');
            $table->renameColumn('phonemeable_id', 'featureable_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Phon_Phonemes', function (Blueprint $table) {
            $table->renameColumn('featureable_type', 'phonemeable_type');
            $table->renameColumn('featureable_id', 'phonemeable_id');
        });
    }
}

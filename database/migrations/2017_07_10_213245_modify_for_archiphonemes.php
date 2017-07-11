<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifyForArchiphonemes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::transaction(function() {
            Schema::table('Phon_Phonemes', function(Blueprint $table) {
                $table->boolean('isArchiphoneme')->default(false);
                $table->string('archiphonemeDescription')->nullable();
            }); 

            Schema::table('Phon_Vowels', function(Blueprint $table) {
                $table->dropForeign(['height_id']);
                $table->dropForeign(['backness_id']);

                $table->unsignedInteger('height_id')->nullable()->change();
                $table->unsignedInteger('backness_id')->nullable()->change();
            });

            Schema::table('Phon_Consonants', function(Blueprint $table) {
                $table->dropForeign(['place_id']);
                $table->dropForeign(['manner_id']);

                $table->unsignedInteger('place_id')->nullable()->change();
                $table->unsignedInteger('manner_id')->nullable()->change();
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveHiddenAtField extends Migration
{
    private $tables = [
        'Languages',
        'Rules',
        'Word_Forms',
        'Word_Examples',
        'Word_Gaps',
        'Morph_Morphemes',
        'Nom_Paradigms',
        'Phon_Phonemes',
        'Phon_Reflexes',
        'Phon_Examples'
    ];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach ($this->tables as $tableName) {
            Schema::table($tableName, function (Blueprint $table) {
                $table->dropColumn('hidden_at');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        foreach ($this->tables as $tableName) {
            Schema::table($tableName, function (Blueprint $table) {
                $table->timestamp('hidden_at')->nullable();
            });
        }
    }
}

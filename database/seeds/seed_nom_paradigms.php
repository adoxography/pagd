<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class seed_nom_paradigms extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Nom_Paradigms')->delete();

        $paradigms = [
        	[
        		'id'              => 1,
        		'language_id'     => 1, // Proto-Algonquian
        		'paradigmType_id' => 1, // Personal pronoun
        		'name'            => 'Emphatic personal pronoun'
        	],
        	[
        		'id'              => 2,
        		'language_id'     => 1, // Proto-Algonquian
        		'paradigmType_id' => 2, // Common noun
        		'name'            => 'Common noun'
        	],
        	[
        		'id'              => 3,
        		'language_id'     => 1, // Proto-Algonquian
        		'paradigmType_id' => 5, // Possessed noun
        		'name'            => 'Possessed noun'
        	],
        ];

        DB::table('Nom_Paradigms')->insert($paradigms);
    }
}

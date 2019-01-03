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
        DB::table('nom_paradigms')->delete();

        $paradigms = [
        	[
        		'language_id'     => 1, // Proto-Algonquian
        		'paradigm_type_id' => 1, // Personal pronoun
        		'name'            => 'Emphatic personal pronoun'
        	],
        	[
        		'language_id'     => 1, // Proto-Algonquian
        		'paradigm_type_id' => 2, // Common noun
        		'name'            => 'Common noun'
        	],
        	[
        		'language_id'     => 1, // Proto-Algonquian
        		'paradigm_type_id' => 5, // Possessed noun
        		'name'            => 'Possessed noun'
        	],
        ];

        DB::table('nom_paradigms')->insert($paradigms);
    }
}

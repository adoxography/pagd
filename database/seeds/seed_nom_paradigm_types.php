<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class seed_nom_paradigm_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('nom_paradigm_types')->delete();

        $types = [
        	['id' => 1, 'name' => 'Personal pronoun',         'has_pronominal_feature' => true,  'has_nominal_feature' => false],
        	['id' => 2, 'name' => 'Common noun',              'has_pronominal_feature' => false, 'has_nominal_feature' => true],
        	['id' => 3, 'name' => 'Demonstrative',            'has_pronominal_feature' => false, 'has_nominal_feature' => true],
        	['id' => 4, 'name' => 'Indefinite/interrogative', 'has_pronominal_feature' => false, 'has_nominal_feature' => true],
        	['id' => 5, 'name' => 'Possessed noun',           'has_pronominal_feature' => true,  'has_nominal_feature' => true],
            ['id' => 6, 'name' => 'Alternative pronoun',      'has_pronominal_feature' => false, 'has_nominal_feature' => true],
            ['id' => 7, 'name' => 'Hesitation pronoun',       'has_pronominal_feature' => false, 'has_nominal_feature' => true]
        ];

        DB::table('nom_paradigm_types')->insert($types);
    }
}

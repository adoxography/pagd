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
        DB::table('Nom_ParadigmTypes')->delete();

        $types = [
        	['id' => 1, 'name' => 'Personal pronoun',         'hasPronominalFeature' => true,  'hasNominalFeature' => false],
        	['id' => 2, 'name' => 'Common noun',              'hasPronominalFeature' => false, 'hasNominalFeature' => true],
        	['id' => 3, 'name' => 'Demonstrative',            'hasPronominalFeature' => false, 'hasNominalFeature' => true],
        	['id' => 4, 'name' => 'Indefinite/interrogative', 'hasPronominalFeature' => false, 'hasNominalFeature' => true],
        	['id' => 5, 'name' => 'Possessed noun',           'hasPronominalFeature' => true,  'hasNominalFeature' => true],
            ['id' => 6, 'name' => 'Alternative pronoun',      'hasPronominalFeature' => false, 'hasNominalFeature' => true],
            ['id' => 7, 'name' => 'Hesitation pronoun',       'hasPronominalFeature' => false, 'hasNominalFeature' => true]
        ];

        DB::table('Nom_ParadigmTypes')->insert($types);
    }
}

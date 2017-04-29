<?php

use App\Language;
use Illuminate\Database\Seeder;

class seed_morphemes extends Seeder
{
	private $numLanguages = 3;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('Morph_Morphemes')->delete();

    	$morphemes = [
    		'id'          => 1,
    		'name'        => 'V',
    		'language_id' => 1,
    		'gloss'       => 'V',
    		'slot_id'     => 1,
            'disambiguator' => 1,
            'hasDuplicates' => 0
    	];

        DB::table('Morph_Morphemes')->insert($morphemes);
    }
}

<?php

use App\Models\Language;
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
    	DB::table('morph_morphemes')->delete();

    	$morphemes = [
    		'id'          => 1,
    		'name'        => 'V',
    		'language_id' => 1,
    		'gloss'       => 'V',
    		'slot_id'     => 1,
            'disambiguator' => 1,
            'has_duplicates' => 0
    	];

    	$morphemes = [
    		'id'          => 2,
    		'name'        => 'N',
    		'language_id' => 1,
    		'gloss'       => 'N',
    		'slot_id'     => 1,
            'disambiguator' => 1,
            'has_duplicates' => 0
    	];

        DB::table('morph_morphemes')->insert($morphemes);
    }
}

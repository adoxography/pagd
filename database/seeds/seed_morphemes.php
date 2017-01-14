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
    	DB::table('Morphemes')->delete();

    	$morphemes = [
    		'id'          => 1,
    		'name'        => 'V',
    		'language_id' => 1,
    		'gloss_id'    => 1,
    		'slot_id'     => 1
    	];

        DB::table('Morphemes')->insert($morphemes);
    }
}

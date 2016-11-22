<?php

use App\Language;
use Illuminate\Database\Seeder;

class seed_morphemes extends Seeder
{
	private $numLanguages = 2;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('Morphemes')->delete();

        for($i = 1; $i <= $this->numLanguages; $i++)
        {
        	$morpheme = [
        		'id'          => $i,
        		'name'        => 'V',
        		'language_id' => $i,
        		'gloss_id'    => 1,
        		'slot_id'     => 1
        	];

        	if($i == 1)
        	{
        		$morpheme['parent_id'] = null;
        	}
        	else
        	{
        		$morpheme['parent_id'] = Language::where('id',$i)->first()->parent->morphemes->where('name','V')->first()->id;
        	}

        	DB::table('Morphemes')->insert($morpheme);
        }

        //DB::table('Morphemes')->insert($morphemes);
    }
}

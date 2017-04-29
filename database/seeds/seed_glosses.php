<?php

use Illuminate\Database\Seeder;

class seed_glosses extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Morph_Glosses')->delete();
        
        $glosses = array(
            ['id' => 1, 'abv' => 'V', 'name' => 'verb stem'],
        	['id' => 2, 'abv' => '1', 'name' => 'first person'],
        	['id' => 3, 'abv' => '2', 'name' => 'second person'],
        	['id' => 4, 'abv' => '1s', 'name' => 'first person singular'],
        	['id' => 5, 'abv' => '2s', 'name' => 'second person singular'],
        	['id' => 6, 'abv' => '1p', 'name' => 'first person plural exclusive'],
        	['id' => 7, 'abv' => '21', 'name' => 'first person plural inclusive'],
        	['id' => 8, 'abv' => '2p', 'name' => 'second person plural'],
        	['id' => 9, 'abv' => '3', 'name' => 'third person animate'],
        	['id' => 10, 'abv' => '3s', 'name' => 'third person animate singular'],
        	['id' => 11, 'abv' => '3d', 'name' => 'third person animate dual'],
        	['id' => 12, 'abv' => '3p', 'name' => 'third person animate plural'],
        	['id' => 13, 'abv' => '3\'', 'name' => 'third person animate obviative'],
        	['id' => 14, 'abv' => '3\'\'', 'name' => 'third person animate double obviative'],
        	['id' => 15, 'abv' => 'X', 'name' => 'impersonal'],
        	['id' => 16, 'abv' => '0', 'name' => 'third person inanimate'],
        	['id' => 17, 'abv' => '0s', 'name' => 'third person inanimate singular'],
        	['id' => 18, 'abv' => '0d', 'name' => 'third person inanimate dual'],
        	['id' => 19, 'abv' => '0p', 'name' => 'third person inanimate plural'],
        	['id' => 20, 'abv' => '0\'', 'name' => 'third person inanimate obviative'],
        	['id' => 21, 'abv' => '0\'s', 'name' => 'third person inanimate obviative singular'],
        	['id' => 22, 'abv' => '0\'d', 'name' => 'third person inanimate obviative dual'],
        	['id' => 23, 'abv' => '0\'p', 'name' => 'third person inanimate obviative plural'],
        	['id' => 24, 'abv' => '0\'\'', 'name' => 'third person inanimate double obviative'],
        	['id' => 25, 'abv' => 'CI', 'name' => 'conjunct indicative']
        );
        
        DB::table('Morph_Glosses')->insert($glosses);
    }
}

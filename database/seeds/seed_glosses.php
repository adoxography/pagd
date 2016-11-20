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
        DB::table('Glosses')->delete();
        
        $glosses = array(
        	['id' => 1, 'abv' => '1', 'name' => 'first person'],
        	['id' => 2, 'abv' => '2', 'name' => 'second person'],
        	['id' => 3, 'abv' => '1s', 'name' => 'first person singular'],
        	['id' => 4, 'abv' => '2s', 'name' => 'second person singular'],
        	['id' => 5, 'abv' => '1p', 'name' => 'first person plural exclusive'],
        	['id' => 6, 'abv' => '21', 'name' => 'first person plural inclusive'],
        	['id' => 7, 'abv' => '2p', 'name' => 'second person plural'],
        	['id' => 8, 'abv' => '3', 'name' => 'third person animate'],
        	['id' => 9, 'abv' => '3s', 'name' => 'third person animate singular'],
        	['id' => 10, 'abv' => '3d', 'name' => 'third person animate dual'],
        	['id' => 11, 'abv' => '3p', 'name' => 'third person animate plural'],
        	['id' => 12, 'abv' => '3\'', 'name' => 'third person animate obviative'],
        	['id' => 13, 'abv' => '3\'\'', 'name' => 'third person animate double obviative'],
        	['id' => 14, 'abv' => 'X', 'name' => 'impersonal'],
        	['id' => 15, 'abv' => '0', 'name' => 'third person inanimate'],
        	['id' => 16, 'abv' => '0s', 'name' => 'third person inanimate singular'],
        	['id' => 17, 'abv' => '0d', 'name' => 'third person inanimate dual'],
        	['id' => 18, 'abv' => '0p', 'name' => 'third person inanimate plural'],
        	['id' => 19, 'abv' => '0\'', 'name' => 'third person inanimate obviative'],
        	['id' => 20, 'abv' => '0\'s', 'name' => 'third person inanimate obviative singular'],
        	['id' => 21, 'abv' => '0\'d', 'name' => 'third person inanimate obviative dual'],
        	['id' => 22, 'abv' => '0\'p', 'name' => 'third person inanimate obviative plural'],
        	['id' => 23, 'abv' => '0\'\'', 'name' => 'third person inanimate double obviative'],
        	['id' => 24, 'abv' => 'CI', 'name' => 'conjunct indicative']
        );
        
        DB::table('Glosses')->insert($glosses);
    }
}

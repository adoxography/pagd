<?php

use Illuminate\Database\Seeder;

class seed_slots extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('morph_slots')->delete();
        
        $slots = array(
        	['id' => 1, 'abv' => 'STM', 'name' => 'stem'],
        	['id' => 2, 'abv' => 'OBV1', 'name' => 'inner thematic obviative'],
        	['id' => 3, 'abv' => 'OBV2', 'name' => 'outer thematic obviative'],
        	['id' => 4, 'abv' => 'TS', 'name' => 'theme sign'],
        	['id' => 5, 'abv' => 'PFX', 'name' => 'prefix'],
        	['id' => 6, 'abv' => 'CEN', 'name' => 'central suffix'],
        	['id' => 7, 'abv' => 'FTV', 'name' => 'formative'],
        	['id' => 8, 'abv' => 'CPL', 'name' => 'central pluralizer'],
        	['id' => 9, 'abv' => 'TPL1', 'name' => 'inner thematic plural'],
        	['id' => 10, 'abv' => 'TPL2', 'name' => 'outer thematic plural'],
        	['id' => 11, 'abv' => 'NEG', 'name' => 'negative'],
        	['id' => 12, 'abv' => 'IMP', 'name' => 'impersonal'],
        	['id' => 13, 'abv' => 'W', 'name' => 'metathesized w'],
        	['id' => 14, 'abv' => 'MOD', 'name' => 'mode sign'],
            ['id' => 15, 'abv' => 'PER', 'name' => 'peripheral suffix'],
        	['id' => 16, 'abv' => 'PV', 'name' => 'preverb'],
        );
        
        DB::table('morph_slots')->insert($slots);
    }
}

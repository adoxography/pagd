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
        DB::table('Slots')->delete();
        
        $slots = array(
        	['id' => 1, 'abv' => 'V', 'name' => 'verb stem'],
        	['id' => 2, 'abv' => 'N', 'name' => 'noun stem'],
        	['id' => 3, 'abv' => 'OBV1', 'name' => 'inner thematic obviative'],
        	['id' => 4, 'abv' => 'OBV2', 'name' => 'outer thematic obviative'],
        	['id' => 5, 'abv' => 'TS', 'name' => 'theme sign'],
        	['id' => 6, 'abv' => 'PFX', 'name' => 'prefix'],
        	['id' => 7, 'abv' => 'CEN', 'name' => 'central suffix'],
        	['id' => 8, 'abv' => 'FTV', 'name' => 'formative'],
        	['id' => 9, 'abv' => 'CPL', 'name' => 'central pluralizer'],
        	['id' => 10, 'abv' => 'TPL1', 'name' => 'inner thematic plural'],
        	['id' => 11, 'abv' => 'TPL2', 'name' => 'outer thematic plural'],
        	['id' => 12, 'abv' => 'NEG', 'name' => 'negative'],
        	['id' => 13, 'abv' => 'IMP', 'name' => 'impersonal'],
        	['id' => 14, 'abv' => 'W', 'name' => 'metathesized w'],
        	['id' => 15, 'abv' => 'MOD', 'name' => 'mode sign'],
            ['id' => 16, 'abv' => 'PER', 'name' => 'peripheral suffix'],
        	['id' => 17, 'abv' => 'PV', 'name' => 'preverb'],
        );
        
        DB::table('Slots')->insert($slots);
    }
}

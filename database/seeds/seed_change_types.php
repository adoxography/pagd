<?php

use Illuminate\Database\Seeder;

class seed_change_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ChangeTypes')->delete();
        
        $changeTypes = [
        	['id' => 1, 'name' => 'Phonological'],
        	['id' => 2, 'name' => 'Morphological']
        ];
        
        DB::table('ChangeTypes')->insert($changeTypes);
    }
}

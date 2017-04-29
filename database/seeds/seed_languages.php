<?php

use Illuminate\Database\Seeder;

class seed_languages extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Morph_Morphemes')->delete();
        DB::table('Languages')->delete();
        
        $languages = [
        	[
                'id'        => 1,
                'name'      => 'Proto-Algonquian', 
                'iso'       => 'alg', 
                'algoCode'  => 'alg', 
                'parent_id' => NULL, 
                'group_id'  => 5 // N/A
            ]
        ];
        
        DB::table('Languages')->insert($languages);
    }
}

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
        DB::table('Languages')->delete();
        
        $languages = array(
        	[
                'id'        => 1,
                'name'      => 'Proto-Algonquian', 
                'iso'       => 'alg', 
                'algoCode'  => 'alg', 
                'parent_id' => NULL, 
                'group_id'  => 5, // N/A
                'verified'  => TRUE
            ],
        	[
                'id'        => 2, 
                'name'      => 'Plains Cree', 
                'iso'       => 'crk', 
                'algoCode'  => 'crk', 
                'parent_id' => 1, // Proto-Algonquian
                'group_id'  => 3, // Central
                'verified'  => FALSE
            ],
        	[
                'id'        => 3, 
                'name'      => 'Kickapoo', 
                'iso'       => 'kip', 
                'algoCode'  => 'kip', 
                'parent_id' => 1, // Proto-Algonquian
                'group_id'  => 3, // Central
                'verified'  => FALSE
            ]
        );
        
        DB::table('Languages')->insert($languages);
    }
}

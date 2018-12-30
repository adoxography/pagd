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
        DB::table('morph_morphemes')->delete();
        DB::table('languages')->delete();
        
        $languages = [
        	[
                'id'        => 1,
                'name'      => 'Proto-Algonquian', 
                'iso'       => 'alg', 
                'algo_code'  => 'alg', 
                'parent_id' => NULL, 
                'group_id'  => 1 // Algonquian
            ]
        ];
        
        DB::table('languages')->insert($languages);
    }
}

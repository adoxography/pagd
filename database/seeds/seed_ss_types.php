<?php

use Illuminate\Database\Seeder;

class seed_ss_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ss_types')->delete();

        $types = [
        	[
        		'id' => 1,
        		'name' => 'Phonetic'
        	],
        	[
        		'id' => 2,
        		'name' => 'Phonological'
        	],
        	[
        		'id' => 3,
        		'name' => 'Morphological'
        	],
        	[
        		'id' => 4,
        		'name' => 'Syntactic'
        	],
        	[
        		'id' => 5,
        		'name' => 'Semantic'
        	]
        ];

        DB::table('ss_types')->insert($types);
    }
}

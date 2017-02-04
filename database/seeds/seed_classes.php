<?php

use Illuminate\Database\Seeder;

class seed_classes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Classes')->delete();
        
        $classes = array(
        	['id' => 1, 'name' => 'AI'],
        	['id' => 2, 'name' => 'II'],
        	['id' => 3, 'name' => 'TA'],
            ['id' => 4, 'name' => 'TI1'],
            ['id' => 5, 'name' => 'TI2'],
            ['id' => 6, 'name' => 'TI3'],        	
            ['id' => 7, 'name' => 'AI+O'],
            ['id' => 8, 'name' => 'TA+O'],
            ['id' => 9, 'name' => 'TA-O'],
        );
        
        DB::table('Classes')->insert($classes);
    }
}

?>
<?php

use Illuminate\Database\Seeder;

class seed_moods extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Moods')->delete();
        
        $moods = array(
        	['id' => 1, 'name' => 'Indicative'],
        	['id' => 2, 'name' => 'Assertive'],
        	['id' => 3, 'name' => 'Conclusive'],
        	['id' => 4, 'name' => 'Dubitative'],
        	['id' => 5, 'name' => 'Evidential'],
        	['id' => 6, 'name' => 'Interrogative'],
        	['id' => 7, 'name' => 'Iterative'],
        	['id' => 8, 'name' => 'Prioritive'],
        	['id' => 9, 'name' => 'Prohibitive'],
        	['id' => 10, 'name' => 'Prospective'],
        	['id' => 11, 'name' => 'Subjective'],
        	['id' => 12, 'name' => 'Subjunctive'],
        	['id' => 13, 'name' => 'Unreal'],
        );
        
        DB::table('Moods')->insert($moods);
    }
}

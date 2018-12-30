<?php

use Illuminate\Database\Seeder;

class seed_modes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('verb_modes')->delete();
        
        $modes = array(
        	['id' => 1, 'name' => 'Indicative'],
        	['id' => 2, 'name' => 'Assertive'],
        	['id' => 3, 'name' => 'Conclusive'],
        	['id' => 4, 'name' => 'Dubitative'],
            ['id' => 5, 'name' => 'Dubitative Preterit'],
        	['id' => 6, 'name' => 'Evidential'],
        	['id' => 7, 'name' => 'Interrogative'],
        	['id' => 8, 'name' => 'Iterative'],
            ['id' => 9, 'name' => 'Preterit'],
        	['id' => 10, 'name' => 'Prioritive'],
        	['id' => 11, 'name' => 'Prohibitive'],
        	['id' => 12, 'name' => 'Prospective'],
        	['id' => 13, 'name' => 'Subjective'],
        	['id' => 14, 'name' => 'Subjunctive'],
            ['id' => 15, 'name' => 'Unreal'],
            ['id' => 16, 'name' => 'Participle'],
        	['id' => 17, 'name' => 'Subordinative'],
        );
        
        DB::table('verb_modes')->insert($modes);
    }
}

<?php

use Illuminate\Database\Seeder;

class seed_tenses extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Tenses')->delete();
        
        $tenses = array(
        	['id' => 1, 'name' => 'Neutral'],
        	['id' => 2, 'name' => 'Preterit']
        );
        
        DB::table('Tenses')->insert($tenses);
    }
}

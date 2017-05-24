<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class seed_nom_modes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Nom_Modes')->delete();

        $modes = [
        	['id' => 1, 'name' => 'Unmarked/Default'],
        	['id' => 2, 'name' => 'Vocative'],
        	['id' => 3, 'name' => 'Preterit'],
        	['id' => 4, 'name' => 'Dubitative'],
        	['id' => 5, 'name' => 'Evidential']
        ];

        DB::table('Nom_Modes')->insert($modes);
    }
}

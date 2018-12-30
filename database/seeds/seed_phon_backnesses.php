<?php

use Illuminate\Database\Seeder;

class seed_phon_backnesses extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phon_backnesses')->delete();

        $backnesses = [
        	['id' => 1, 'name' => 'Front'],
        	['id' => 2, 'name' => 'Central'],
        	['id' => 3, 'name' => 'Back'],
        ];

        DB::table('phon_backnesses')->insert($backnesses);
    }
}

<?php

use Illuminate\Database\Seeder;

class seed_phon_heights extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phon_heights')->delete();

        $heights = [
        	['id' => 1, 'name' => 'High'],
        	['id' => 2, 'name' => 'Mid'],
        	['id' => 3, 'name' => 'Low'],
        ];

        DB::table('phon_heights')->insert($heights);
    }
}

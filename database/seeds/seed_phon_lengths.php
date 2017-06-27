<?php

use Illuminate\Database\Seeder;

class seed_phon_lengths extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Phon_Lengths')->delete();

        $lengths = [
        	['id' => 1, 'name' => 'Long'],
        	['id' => 2, 'name' => 'Short'],
        	['id' => 3, 'name' => 'Extrashort'],
        ];

        DB::table('Phon_Lengths')->insert($lengths);
    }
}

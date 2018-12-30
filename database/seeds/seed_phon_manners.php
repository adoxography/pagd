<?php

use Illuminate\Database\Seeder;

class seed_phon_manners extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phon_manners')->delete();

        $manners = [
        	['id' => 1, 'name' => 'Plosive'],
        	['id' => 2, 'name' => 'Fricative'],
        	['id' => 3, 'name' => 'Affricate'],
        	['id' => 4, 'name' => 'Nasal'],
        	['id' => 5, 'name' => 'Liquid'],
        	['id' => 6, 'name' => 'Glide'],
        ];

        DB::table('phon_manners')->insert($manners);
    }
}

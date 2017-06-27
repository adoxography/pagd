<?php

use Illuminate\Database\Seeder;

class seed_phon_places extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Phon_Places')->delete();

        $places = [
        	['id' => 1, 'name' => 'Labial'],
        	['id' => 2, 'name' => 'Interdental'],
        	['id' => 3, 'name' => 'Dental'],
        	['id' => 4, 'name' => 'Dental/Alveolar'],
        	['id' => 5, 'name' => 'Alveolar'],
        	['id' => 6, 'name' => 'Alveopalatal'],
        	['id' => 7, 'name' => 'Palatal'],
        	['id' => 8, 'name' => 'Velar'],
        	['id' => 9, 'name' => 'Uvular'],
        	['id' => 10, 'name' => 'Glottal']
        ];

        DB::table('Phon_Places')->insert($places);
    }
}

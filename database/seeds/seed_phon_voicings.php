<?php

use Illuminate\Database\Seeder;

class seed_phon_voicings extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phon_voicings')->delete();

        $voicings = [
        	['id' => 1, 'name' => 'Voiceless'],
        	['id' => 2, 'name' => 'Voiced'],
        	['id' => 3, 'name' => 'Lenis'],
        	['id' => 4, 'name' => 'Fortis'],
        	['id' => 5, 'name' => 'Preaspirated']
        ];

        DB::table('phon_voicings')->insert($voicings);
    }
}

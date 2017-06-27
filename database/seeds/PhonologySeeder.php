<?php

use Illuminate\Database\Seeder;

class PhonologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(seed_phon_backnesses::class);
        $this->call(seed_phon_heights::class);
        $this->call(seed_phon_lengths::class);
        $this->call(seed_phon_manners::class);
        $this->call(seed_phon_places::class);
        $this->call(seed_phon_voicings::class);
    }
}

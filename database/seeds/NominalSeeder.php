<?php

use Illuminate\Database\Seeder;

class NominalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(seed_nom_modes::class);
        $this->call(seed_nom_paradigm_types::class);
        $this->call(seed_nom_paradigms::class);
    }
}

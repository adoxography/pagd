<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(seed_groups::class);
        $this->call(seed_classes::class);
        $this->call(seed_arguments::class);
        $this->call(seed_orders::class);
        $this->call(seed_moods::class);
        $this->call(seed_tenses::class);
        $this->call(seed_glosses::class);
        $this->call(seed_slots::class);
        $this->call(seed_languages::class);
        $this->call(seed_morphemes::class);
    }
}

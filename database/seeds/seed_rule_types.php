<?php

use Illuminate\Database\Seeder;

class seed_rule_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('RuleTypes')->delete();

        $types = [
            ['id' => '1', 'name' => 'Synchronic phonological'],
            ['id' => '2', 'name' => 'Diachronic phonological'],
            ['id' => '3', 'name' => 'Morphological'],
            ['id' => '4', 'name' => 'Syntactic'],
        ];

        DB::table('RuleTypes')->insert($types);
    }
}

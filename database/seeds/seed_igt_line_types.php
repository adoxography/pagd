<?php

use Illuminate\Database\Seeder;

class seed_igt_line_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('igt_line_types')->delete();
        
        $types = [
        	['id' => 1, 'name' => 'Morphemes',            'align' => true],
        	['id' => 2, 'name' => 'Glosses',              'align' => true],
        	['id' => 3, 'name' => 'Slots',                'align' => true],
        	['id' => 4, 'name' => 'Partial translations', 'align' => true],
            ['id' => 5, 'name' => 'Full translation',     'align' => false],
        	['id' => 6, 'name' => 'Other (aligning)',     'align' => true],
        	['id' => 7, 'name' => 'Other (non-aligning)', 'align' => false]
        ];
        
        DB::table('igt_line_types')->insert($types);
    }
}

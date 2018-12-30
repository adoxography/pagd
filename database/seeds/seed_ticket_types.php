<?php

use Illuminate\Database\Seeder;

class seed_ticket_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ticket_types')->delete();

        $types = [
        	[
        		'id' => 1,
        		'name' => 'Unexpected behaviour',
        		'description' => 'Broken links, error messages, crashes, etc.'
        	],
        	[
        		'id' => 2,
        		'name' => 'Style issue',
        		'description' => 'Issues with the look of the website: odd placement of elements, variations across browsers, etc.'
        	],
        	[
        		'id' => 3,
        		'name' => 'Language issues',
        		'description' => 'Issues with spelling or grammar'
        	],
        	[
        		'id' => 4,
        		'name' => 'New option',
        		'description' => 'Requests for more choices such as new modes or slots'
        	],
        	[
        		'id' => 5,
        		'name' => 'New feature',
        		'description' => 'Request for new functionality to the website'
        	],
        	[
        		'id' => 6,
        		'name' => 'Other',
        		'description' => null
        	]
        ];

        DB::table('ticket_types')->insert($types);
    }
}

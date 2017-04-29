<?php

use Illuminate\Database\Seeder;

class seed_users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        $users = [
        	[
        		'name'     => 'adoxography',
        		'email'    => 'nevermore667@gmail.com',
        		'password' => bcrypt('Water52'),
                'userRoles_id' => 1
        	]
        ];

        DB::table('users')->insert($users);
    }
}

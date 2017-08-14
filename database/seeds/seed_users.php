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
                'firstName'     => 'Joe',
                'lastName'     => 'Doe',
                'email'    => 'test@gmail.com',
                'password' => bcrypt('test')
            ]
        ];

        DB::table('users')->insert($users);
    }
}

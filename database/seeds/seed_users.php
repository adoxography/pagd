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
                'first_name'     => 'Joe',
                'last_name'     => 'Doe',
                'email'    => 'test@gmail.com',
                'password' => bcrypt('test'),
                'slug' => 'joe-doe'
            ]
        ];

        DB::table('users')->insert($users);
    }
}

<?php

use Illuminate\Database\Seeder;

class seed_user_roles_table extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('UserRoles')->delete();

        $roles = [
        	[
        		'id'            => 1,
        		'name'          => 'Administrator',
        		'canEdit'       => true,
        		'canHardDelete' => true
        	],
        	[
        		'id'            => 2,
        		'name'          => 'Contributor',
        		'canEdit'       => true,
        		'canHardDelete' => false
        	],
        	[
        		'id'            => 3,
        		'name'          => 'User',
        		'canEdit'       => false,
        		'canHardDelete' => false
        	]
        ];

        DB::table('UserRoles')->insert($roles);
    }
}

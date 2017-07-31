<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class permission_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
        	'developer' => [
        		'receive ticket summaries'
        	],
        	'leader' => [
        		'receive site summaries'
        	],
        	'contributor' => [
        		'add content',
                'delete content'
        	],
        	'reader' => [
        		'bookmark content'
        	]
        ];

        foreach ($roles as $name => $permissions) {
        	$role = Role::create(['name' => $name]);

        	foreach ($permissions as $name) {
        		$permission = Permission::create(['name' => $name]);

        		$role->givePermissionTo($permission);
        	}
        }
    }
}

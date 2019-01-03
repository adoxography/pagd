<?php

use App\Models\Users\User;
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
        Artisan::call('cache:forget', ['key' => 'spatie.permission.cache']);
        DB::table('roles')->delete();
        DB::table('permissions')->delete();
        DB::table('model_has_permissions')->delete();
        DB::table('model_has_roles')->delete();
        DB::table('role_has_permissions')->delete();

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

        User::first()->assignRole(['developer', 'leader', 'contributor', 'reader']);
        Artisan::call('cache:forget', ['key' => 'spatie.permission.cache']);
    }
}

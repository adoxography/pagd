<?php

use Illuminate\Database\Seeder;

class seed_arguments extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Arguments')->delete();
        
        $arguments = array(
        	['id' => 1, 'name' => '1', 'person' => '1', 'obviativeCode' => NULL, 'number' => NULL],
        		['id' => 2, 'name' => '2', 'person' => '2', 'obviativeCode' => NULL, 'number' => NULL],
        		['id' => 3, 'name' => '1s', 'person' => '1', 'obviativeCode' => NULL, 'number' => 1],
        		['id' => 4, 'name' => '2s', 'person' => '2', 'obviativeCode' => NULL, 'number' => 1],
        		['id' => 5, 'name' => '1p', 'person' => '1', 'obviativeCode' => NULL, 'number' => 3],
        		['id' => 6, 'name' => '21', 'person' => '21', 'obviativeCode' => NULL, 'number' => 3],
        		['id' => 7, 'name' => '2p', 'person' => '2', 'obviativeCode' => NULL, 'number' => 3],
        		['id' => 8, 'name' => '3', 'person' => '3', 'obviativeCode' => NULL, 'number' => NULL],
        		['id' => 9, 'name' => '3s', 'person' => '3', 'obviativeCode' => NULL, 'number' => 1],
        		['id' => 10, 'name' => '3d', 'person' => '3', 'obviativeCode' => NULL, 'number' => 2],
        		['id' => 11, 'name' => '3p', 'person' => '3', 'obviativeCode' => NULL, 'number' => 3],
        		['id' => 12, 'name' => '3\'', 'person' => '3', 'obviativeCode' => 1, 'number' => NULL],
        		['id' => 13, 'name' => '3\'\'', 'person' => '3', 'obviativeCode' => 2, 'number' => NULL],
        		['id' => 14, 'name' => 'X', 'person' => 'X', 'obviativeCode' => NULL, 'number' => NULL],
        		['id' => 15, 'name' => '0', 'person' => '0', 'obviativeCode' => NULL, 'number' => NULL],
        		['id' => 16, 'name' => '0s', 'person' => '0', 'obviativeCode' => NULL, 'number' => 1],
        		['id' => 17, 'name' => '0d', 'person' => '0', 'obviativeCode' => NULL, 'number' => 2],
        		['id' => 18, 'name' => '0p', 'person' => '0', 'obviativeCode' => NULL, 'number' => 3],
        		['id' => 19, 'name' => '0\'', 'person' => '0', 'obviativeCode' => 1, 'number' => NULL],
        		['id' => 20, 'name' => '0\'s', 'person' => '0', 'obviativeCode' => 1, 'number' => 1],
        		['id' => 21, 'name' => '0\'d', 'person' => '0', 'obviativeCode' => 1, 'number' => 2],
        		['id' => 22, 'name' => '0\'p', 'person' => '0', 'obviativeCode' => 1, 'number' => 3],
        		['id' => 23, 'name' => '0\'\'', 'person' => '0', 'obviativeCode' => 2, 'number' => NULL]
        );
        
        DB::table('Arguments')->insert($arguments);
    }
}

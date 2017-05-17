<?php

use Illuminate\Database\Seeder;

class seed_word_features extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Word_Features')->delete();
        
        $features = [
        	['id' => 1, 'name'  => '1',     'person' => '1',  'obviativeCode' => null, 'number' => null],
    		['id' => 2, 'name'  => '2',     'person' => '2',  'obviativeCode' => null, 'number' => null],
    		['id' => 3, 'name'  => '1s',    'person' => '1',  'obviativeCode' => null, 'number' => 1],
    		['id' => 4, 'name'  => '2s',    'person' => '2',  'obviativeCode' => null, 'number' => 1],
    		['id' => 5, 'name'  => '1p',    'person' => '1',  'obviativeCode' => null, 'number' => 3],
    		['id' => 6, 'name'  => '21',    'person' => '21', 'obviativeCode' => null, 'number' => 3],
    		['id' => 7, 'name'  => '2p',    'person' => '2',  'obviativeCode' => null, 'number' => 3],
    		['id' => 8, 'name'  => '3',     'person' => '3',  'obviativeCode' => null, 'number' => null],
    		['id' => 9, 'name'  => '3s',    'person' => '3',  'obviativeCode' => null, 'number' => 1],
    		['id' => 10, 'name' => '3d',    'person' => '3',  'obviativeCode' => null, 'number' => 2],
    		['id' => 11, 'name' => '3p',    'person' => '3',  'obviativeCode' => null, 'number' => 3],
    		['id' => 12, 'name' => '3\'',   'person' => '3',  'obviativeCode' => 1,    'number' => null],
    		['id' => 13, 'name' => '3\'\'', 'person' => '3',  'obviativeCode' => 2,    'number' => null],
    		['id' => 14, 'name' => 'X',     'person' => NULL, 'obviativeCode' => null, 'number' => null],
    		['id' => 15, 'name' => '0',     'person' => '0',  'obviativeCode' => null, 'number' => null],
    		['id' => 16, 'name' => '0s',    'person' => '0',  'obviativeCode' => null, 'number' => 1],
    		['id' => 17, 'name' => '0d',    'person' => '0',  'obviativeCode' => null, 'number' => 2],
    		['id' => 18, 'name' => '0p',    'person' => '0',  'obviativeCode' => null, 'number' => 3],
    		['id' => 19, 'name' => '0\'',   'person' => '0',  'obviativeCode' => 1,    'number' => null],
    		['id' => 20, 'name' => '0\'s',  'person' => '0',  'obviativeCode' => 1,    'number' => 1],
    		['id' => 21, 'name' => '0\'d',  'person' => '0',  'obviativeCode' => 1,    'number' => 2],
    		['id' => 22, 'name' => '0\'p',  'person' => '0',  'obviativeCode' => 1,    'number' => 3],
    		['id' => 23, 'name' => '0\'\'', 'person' => '0',  'obviativeCode' => 2,    'number' => null],
    		['id' => 24, 'name' => 'LOC',   'person' => null, 'obviativeCode' => null, 'number' => null]
        ];
        
        DB::table('Word_Features')->insert($features);
    }
}

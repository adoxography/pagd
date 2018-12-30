<?php

use Illuminate\Database\Seeder;

class seed_orders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('verb_orders')->delete();
        
        $orders = array(
        	['id' => 1, 'name' => 'Conjunct'],
        	['id' => 2, 'name' => 'Imperative'],
        	['id' => 3, 'name' => 'Independent']
        );
        
        DB::table('verb_orders')->insert($orders);
    }
}

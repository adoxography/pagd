<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class seed_nom_feature_types extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Nom_FeatureTypes')->delete();

        $types = [
        	['id' => 1, 'name' => 'pronominal'],
        	['id' => 2, 'name' => 'nominal']
        ];
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateLanguageLocationColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $locations = $this->createLocations();

        Schema::table('Languages', function (Blueprint $table) {
            $table->dropColumn('location');
        });

        Schema::table('Languages', function (Blueprint $table) {
            $table->unsignedInteger('location_id')->nullable();
        });

        $this->updateLanguages($locations);
    }

    /**
     * Creates new rows in the Locations table based on the current state of
     * the Languages table
     *
     * @return array  The language/location correspondences
     */
    protected function createLocations() {
        $languages = DB::table('Languages')->select('id', 'location')->get();
        $locationData = [];
        $locations = [];
        $id = 1;

        foreach ($languages as $language) {
            $position = $language->location;

            if ($position) {
                $locationData[] = [
                    'id' => $id,
                    'type' => 'point',
                    'position' => $this->convertLocation($position)
                ];

                $locations[$language->id] = $id;
                $id++;
            }
        }

        DB::table('Locations')->insert($locationData);

        return $locations;
    }

    /**
     * Updates the languages in the database to use new location data
     * 
     * @param array $locations
     */
    protected function updateLanguages(array $locations) {
        foreach ($locations as $language_id => $location_value) {
            DB::table('Languages')
                ->where('id', $language_id)
                ->update(['location_id' => $location_value]);
        }
    }

    /**
     * Converts a location from the old set style notation to JSON
     *
     * @param string $old
     * @return string
     */
    protected function convertLocation(string $old) {
        $pattern = '/-?\d+(?:\.\d+)?/';
        preg_match_all($pattern, $old, $matches);

        [$lat, $lng] = $matches[0];
        return "{\"lng\":$lng,\"lat\":$lat}";
    }
}

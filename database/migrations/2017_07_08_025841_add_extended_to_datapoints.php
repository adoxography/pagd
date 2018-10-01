<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddExtendedToDatapoints extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('SS_Datapoints', function(Blueprint $table) {
            $table->boolean('isExtended')->default(false);
            $table->boolean('isExtension')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('SS_Datapoints', function(Blueprint $table) {
            $table->dropColumn('isExtended');
            $table->dropColumn('isExtension');
        });
    }
}

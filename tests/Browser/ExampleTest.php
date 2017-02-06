<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;

    /** @test */
    function the_wepage_is_viewable()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->assertSee('WELCOME');
        });     
    }
}

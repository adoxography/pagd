<?php

namespace Tests\Browser;

use App\User;
use App\Language;
use Tests\DuskTestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LanguageFormTest extends DuskTestCase
{
    use DatabaseMigrations;

    // protected $connectionsToTransact = ['mysql'];

    /** @test */
    function a_language_can_be_created()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')

                    // Make sure we're on the right page
                    ->assertSee('ADD A LANGUAGE')

                    // Enter the info
                    ->type('name', 'Test Language')
                    ->type('alternateNames', 'Some Name, Other name')
                    ->clear('parent')
                    ->type('parent', 'Proto-Algonquian')
                    ->clear('group')
                    ->type('group', 'Plains')
                    ->type('iso', 'tst')
                    ->type('algoCode', 'abfse')
                    ->press('Submit')

                    // Make sure we got to the right page
                    ->assertSee('Test Language added successfully.')
                    ->assertSee('LANGUAGE DETAILS')

                    // Make sure all the data made it
                    ->assertSee('Test Language')
                    ->assertSee('Some Name, Other name')
                    ->assertSee('Proto-Algonquian')
                    ->assertSee('Plains')
                    ->assertSee('tst')
                    ->assertSee('abfse');
        });
    }

    /** @test */
    function the_language_form_loads_all_of_languages_details() {
        $this->browse(function ($browser) {
            // Create the language
            $language = Language::create([
                'name'           => 'Test Language',
                'alternateNames' => 'Other name, Different name',
                'parent_id'      => 1,
                'group_id'       => 1,
                'iso'            => 'tst',
                'algoCode'       => 'abfde',
                'reconstructed'  => true,
                'notes'          => 'These are some notes about this language'
            ]);

            // Make sure all of its information made it to the edit page
            $browser->loginAs(User::find(1))
                    ->visit("/languages/{$language->id}/edit")

                    ->assertInputValue('name', 'Test Language')
                    ->assertInputValue('alternateNames', 'Other name, Different name')
                    ->assertInputValue('parent', 'Proto-Algonquian')
                    ->assertInputValue('parent_id', '1')
                    ->assertInputValue('group', 'Unknown')
                    ->assertInputValue('group_id', '1')
                    ->assertInputValue('iso', 'tst')
                    ->assertInputValue('algoCode', 'abfde')
                    // ->assertInputValue('reconstructed', '1') <- Figure out a way to verify radio boxes
                    ->assertInputValue('notes', 'These are some notes about this language');
        });
    }

    /** @test */
    function a_language_can_be_edited() {
        $this->browse(function ($browser) {
            // Create a language - it doesn't matter what its information is, since we'll be changing it, anyway
            $language = factory(Language::class)->create();

            $browser->loginAs(User::find(1))
                    ->visit("/languages/{$language->id}/edit")

                    // Clear all the old info
                    ->clear('name')
                    ->clear('alternateNames')
                    ->clear('parent')
                    ->clear('group')
                    ->clear('iso')
                    ->clear('algoCode')

                    // Enter the new info
                    ->type('name', 'Test Language')
                    ->type('alternateNames', 'Some Name, Other name')
                    ->type('parent', 'Proto-Algonquian')
                    ->type('group', 'Plains')
                    ->type('iso', 'tst')
                    ->type('algoCode', 'abfse')
                    ->press('Submit')

                    // Make sure we get back to the detail page
                    ->assertPathIs("/languages/{$language->id}")
                    
                    // Make sure all the data made it
                    ->assertSee('Test Language')
                    ->assertSee('Some Name, Other name')
                    ->assertSee('Proto-Algonquian')
                    ->assertSee('Plains')
                    ->assertSee('tst')
                    ->assertSee('abfse');
        });
    }

    /** @test */
    function the_name_field_is_required()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->clear('parent')
                    ->type('parent', 'Proto-Algonquian')
                    ->clear('group')
                    ->type('group', 'Plains')
                    ->type('iso', 'tst')
                    ->type('algoCode', 't')
                    ->press('Submit')
                    ->assertSee('ADD A LANGUAGE'); // Should not have left the page
        });
    }

    /** @test */
    function the_iso_field_is_required()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->type('name', 'New Language')
                    ->clear('parent')
                    ->type('parent', 'Proto-Algonquian')
                    ->clear('group')
                    ->type('group', 'Plains')
                    ->type('algoCode', 't')
                    ->press('Submit')
                    ->assertSee('ADD A LANGUAGE'); // Should not have left the page
        });
    }

    /** @test */
    function the_algonquianist_code_field_is_required()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->type('name', 'New Language')
                    ->clear('parent')
                    ->type('parent', 'Proto-Algonquian')
                    ->clear('group')
                    ->type('group', 'Plains')
                    ->type('iso', 'tst')
                    ->press('Submit')
                    ->assertSee('ADD A LANGUAGE'); // Should not have left the page
        });
    }
}

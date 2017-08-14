<?php

namespace Tests\Browser;

use App\Language;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\DuskTestCase;

class LanguageFormTest extends DuskTestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_user_must_be_logged_in_to_see_the_language_form()
    {
        $this->browse(function ($browser) {
            $browser->logout()
                    ->visit('/languages/create')
                    ->assertSee('Log in');
        });
    }

    /** @test */
    public function the_language_form_exists()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->assertSee('Add language');
        });
    }

    /** @test */
    public function the_language_form_loads_parents()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->clear('parent')
                    ->type('parent', 'P')
                    ->assertSee('Proto-Algonquian');
        });
    }

    /** @test */
    public function the_language_form_loads_groups()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->clear('group')
                    ->type('group', 'C')
                    ->assertSee('Central');
        });
    }

    /** @test */
    public function the_language_name_is_required()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->clear('name')
                    ->type('group', 'A')
                    ->assertSee('The name field is required');
        });
    }

    /** @test */
    public function the_iso_field_must_be_more_than_two_characters()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->clear('iso')
                    ->type('iso', 'ab')
                    ->pause(1000)
                    ->assertSee('The ISO field must be at least 3 characters.');
        });
    }

    /** @test */
    public function the_iso_field_must_be_less_than_four_characters()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->clear('iso')
                    ->type('iso', 'abcd')
                    ->pause(1000)
                    ->assertSee('The ISO field may not be greater than 3 characters.');
        });
    }

    /** @test */
    public function the_algonquianist_code_field_is_required()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')
                    ->type('algoCode', 'a')
                    ->clear('algoCode')
                    ->type('iso', 'blah')
                    ->assertSee('The algonquianist code field is required.');
        });
    }

    /** @test */
    public function a_language_can_be_created()
    {
        $this->browse(function ($browser) {
            $browser->loginAs(User::find(1))
                    ->visit('/languages/create')

                    ->type('name', 'Test Language')
                    ->type('alternateNames', 'Some Name, Other name')
                    ->clear('parent')
                    ->type('parent', 'Proto-Algonquian')
                    ->clear('group')
                    ->type('group', 'Plains')
                    ->type('iso', 'tst')
                    ->type('algoCode', 'abfse')
                    ->press('Submit')

                    ->assertSee('Test Language added successfully.')

                    ->assertSee('Test Language')
                    ->assertSee('Some Name, Other name')
                    ->assertSee('Proto-Algonquian')
                    ->assertSee('Plains')
                    ->assertSee('tst')
                    ->assertSee('abfse');

            $lookup = Language::where('name', 'Test Language')->get();
            if ($lookup->count() > 0) {
                $lookup->first()->forceDelete();
            }
        });
    }

    /** @test */
    public function the_language_form_loads_all_of_languages_details()
    {
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

            // Delete the language
            $language->forceDelete();
        });
    }

    // /** @test */
    // function a_language_can_be_edited() {
    //     $this->browse(function ($browser) {
    //         // Create a language - it doesn't matter what its information is, since we'll be changing it, anyway
    //         $language = factory(Language::class)->create();

    //         $browser->loginAs(User::find(1))
    //                 ->visit("/languages/{$language->id}/edit")

    //                 // Clear all the old info
    //                 ->clear('name')
    //                 ->clear('alternateNames')
    //                 ->clear('parent')
    //                 ->clear('group')
    //                 ->clear('iso')
    //                 ->clear('algoCode')

    //                 // Enter the new info
    //                 ->type('name', 'Test Language')
    //                 ->type('alternateNames', 'Some Name, Other name')
    //                 ->type('parent', 'Proto-Algonquian')
    //                 ->type('group', 'Plains')
    //                 ->type('iso', 'tst')
    //                 ->type('algoCode', 'abfse')
    //                 ->press('Submit')

    //                 // Make sure we get back to the detail page
    //                 ->assertPathIs("/languages/{$language->id}")

    //                 // Make sure all the data made it
    //                 ->assertSee('Test Language')
    //                 ->assertSee('Some Name, Other name')
    //                 ->assertSee('Proto-Algonquian')
    //                 ->assertSee('Plains')
    //                 ->assertSee('tst')
    //                 ->assertSee('abfse');
    //     });
    // }
}

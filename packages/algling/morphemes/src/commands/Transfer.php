<?php

namespace Algling\Morphemes\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class Transfer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'morph:transfer';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Transfer morpheme data from the old system to the new';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        DB::transaction(function () {
            $this->erase();
            $this->info('Old data rolled back.');

            $this->transfer();
            $this->info('Transfer complete.');

            $this->updateSources();
            $this->info('Updated sources.');
        });
    }

    protected function erase()
    {
        DB::table('Morph_Glosses_Morphemes')->delete();
        DB::table('Morph_InitialChanges')->delete();
        DB::table('Morph_Morphemes')->delete();
        DB::table('Morph_Glosses')->delete();
        DB::table('Morph_Slots')->delete();
    }

    protected function transfer()
    {
        DB::select('INSERT INTO Morph_Glosses (`id`, `name`, `abv`, `description`, `created_at`, `updated_at`, `deleted_at`) SELECT `id`, `name`, `abv`, `description`, `created_at`, `updated_at`, `deleted_at` FROM Glosses');
        $this->info('Transferred glosses successfully.');

        DB::select('INSERT INTO Morph_Slots (`id`, `name`, `abv`, `colour`, `description`, `created_at`, `updated_at`, `deleted_at`) SELECT `id`, `name`, `abv`, `colour`, `description`, `created_at`, `updated_at`, `deleted_at` FROM Slots');
        $this->info('Transferred slots successfully.');

        DB::select('INSERT INTO Morph_Morphemes (`id`, `name`, `gloss`, `language_id`, `slot_id`, `parent_id`, `changeType_id`, `historicalNotes`, `allomorphyNotes`, `privateNotes`, `created_at`, `updated_at`, `hidden_at`, `deleted_at`, `disambiguator`, `hasDuplicates`) SELECT `id`, `name`, `gloss`, `language_id`, `slot_id`, `parent_id`, `changeType_id`, `historicalNotes`, `allomorphyNotes`, `comments`, `created_at`, `updated_at`, `hidden_at`, `deleted_at`, `disambiguator`, `hasDuplicates` FROM Morphemes');
        $this->info('Transferred morphemes successfully.');

        DB::select('INSERT INTO Morph_Glosses_Morphemes (`gloss_id`, `morpheme_id`) SELECT `gloss_id`, `morpheme_id` FROM Glosses_Morphemes');
        $this->info('Transferred glosses_morphemes successfully.');

        DB::select('INSERT INTO Morph_InitialChanges (`id`, `change`, `morpheme_id`, `disambiguator`, `created_at`, `updated_at`) SELECT `id`, `change`, `morpheme_id`, `disambiguator`, `created_at`, `updated_at` FROM InitialChanges');
        $this->info('Transferred initial changes successfully.');
    }

    protected function updateSources()
    {
        DB::update('UPDATE Sourceables SET sourceable_type=\'Algling\\\\Morphemes\\\\Models\\\\Morpheme\' WHERE sourceable_type= ?', ['App\\Morpheme']);
    }
}

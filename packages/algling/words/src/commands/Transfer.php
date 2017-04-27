<?php

namespace Algling\Words\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class Transfer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'word:transfer';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Transfer word data from the old system to the new';

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
        DB::table('Morph_Morphemeables')->delete();
        DB::table('Word_Examples')->delete();
        DB::table('Word_Forms')->delete();
        DB::table('Word_Gaps')->delete();
    }

    protected function transfer()
    {
        DB::select('INSERT INTO Word_Gaps (`id`, `language_id`, `structure_id`, `structure_type`, `historicalNotes`, `privateNotes`, `hidden_at`, `deleted_at`, `created_at`, `updated_at`) SELECT `id`, `language_id`, `formType_id`, \'Algling\\\\Verbals\\\\Models\\\\Structure\', `historicalNotes`, `comments`, `hidden_at`, `deleted_at`, `created_at`, `updated_at` FROM EmptyForms');
        $this->info('Transferred gaps successfully.');

        DB::select('INSERT INTO Word_Forms (`id`, `name`, `phonemicForm`, `morphemicForm`, `language_id`, `parent_id`, `changeType_id`, `structure_id`, `structure_type`, `historicalNotes`, `allomorphyNotes`, `usageNotes`, `privateNotes`, `hidden_at`, `deleted_at`, `created_at`, `updated_at`, `complete`) SELECT `id`, `surfaceForm`, `phoneticForm`, `morphemicForm`, `language_id`, `parent_id`, `changeType_id`, `formType_id`, \'Algling\\\\Verbals\\\\Models\\\\Structure\', `historicalNotes`, `allomorphyNotes`, `usageNotes`, `comments`, `hidden_at`, `deleted_at`, `created_at`, `updated_at`, `complete` FROM Forms');
        $this->info('Transferred forms successfully.');

        DB::select('INSERT INTO Word_Examples (`id`, `name`, `translation`, `morphemicForm`, `form_id`, `publicNotes`, `privateNotes`, `hidden_at`, `deleted_at`, `created_at`, `updated_at`, `complete`) SELECT `id`, `name`, `translation`, `morphemicForm`, `form_id`, `notes`, `comments`, `hidden_at`, `deleted_at`, `created_at`, `updated_at`, `complete` FROM Examples');
        $this->info('Transferred examples successfully.');

        DB::select('INSERT INTO Morph_Morphemeables (`morpheme_id`, `morphemeable_id`, `morphemeable_type`, `position`) SELECT `morpheme_id`, `form_id`, \'Algling\\\\Verbals\\\\\Models\\\\Form\', `position` FROM Forms_Morphemes');
        $this->info('Transferred form/morpheme links successfully.');

        DB::select('INSERT INTO Morph_Morphemeables (`morpheme_id`, `morphemeable_id`, `morphemeable_type`, `position`) SELECT `morpheme_id`, `example_id`, \'Algling\\\\Verbals\\\\\Models\\\\Example\', `position` FROM Examples_Morphemes');
        $this->info('Transferred example/morpheme links successfully.');
    }

    protected function updateSources()
    {
        DB::update('UPDATE Sourceables SET sourceable_type=\'Algling\\\\Verbals\\\\Models\\\\Form\' WHERE sourceable_type= ?', ['App\\Form']);
        DB::update('UPDATE Sourceables SET sourceable_type=\'Algling\\\\Verbals\\\\Models\\\\Example\' WHERE sourceable_type= ?', ['App\\Example']);
    }
}

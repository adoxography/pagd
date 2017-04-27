<?php

namespace Algling\Verbals\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class Transfer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'verb:transfer';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Transfer verbal data from the old system to the new';

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
        });
    }

    protected function erase()
    {
        DB::table('Verb_Structures')->delete();
        DB::table('Verb_Modes')->delete();
        DB::table('Verb_Orders')->delete();
        DB::table('Verb_Classes')->delete();
        DB::table('Verb_Arguments')->delete();
    }

    protected function transfer()
    {
        DB::select('INSERT INTO Verb_Arguments (`id`, `name`, `person`, `obviativeCode`, `number`, `created_at`, `updated_at`) SELECT `id`, `name`, `person`, `obviativeCode`, `number`, `created_at`, `updated_at` FROM Arguments');
        $this->info('Transferred arguments successfully.');

        DB::select('INSERT INTO Verb_Classes (`id`, `name`, `created_at`, `updated_at`) SELECT `id`, `name`, `created_at`, `updated_at` FROM Classes');
        $this->info('Transferred classes successfully.');

        DB::select('INSERT INTO Verb_Orders (`id`, `name`, `description`, `position`, `created_at`, `updated_at`) SELECT `id`, `name`, `description`, `position`, `created_at`, `updated_at` FROM Orders');
        $this->info('Transferred orders successfully.');

        DB::select('INSERT INTO Verb_Modes (`id`, `name`, `description`, `created_at`, `updated_at`) SELECT `id`, `name`, `description`, `created_at`, `updated_at` FROM Modes');
        $this->info('Transferred modes successfully.');

        DB::select('INSERT INTO Verb_Structures (`id`, `class_id`, `subject_id`, `primaryObject_id`, `secondaryObject_id`, `order_id`, `mode_id`, `isNegative`, `isDiminutive`, `isAbsolute`, `head`, `subclass`, `created_at`, `updated_at`) SELECT `id`, `class_id`, `subject_id`, `primaryObject_id`, `secondaryObject_id`, `order_id`, `mode_id`, `isNegative`, `isDiminutive`, `isAbsolute`, `head`, `subclass`, `created_at`, `updated_at` FROM FormTypes');
        $this->info('Transferred structures successfully.');
    }
}

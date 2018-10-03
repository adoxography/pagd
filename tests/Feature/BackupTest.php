<?php

use App\Events\Backup;
use App\Models\Group;

class BackupTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();

        $this->key = Config::get('constants.backup_cache_key');
        $this->store = 'database';

        Cache::forget($this->key);
    }

    /** @test */
    public function save_number_is_set_to_1_on_initial_save()
    {
        factory(Group::class)->create();

        $this->assertEquals(1, Cache::get($this->key));
    }

    /** @test */
    public function a_backup_event_is_fired_when_there_is_no_key()
    {
        $this->expectsEvents(Backup::class);

        factory(Group::class)->create();
    }

    /** @test */
    public function a_backup_event_is_fired_every_5_saves()
    {
        $this->expectsEvents(Backup::class);

        factory(Group::class, 6)->create();
    }

    /** @test */
    public function save_number_is_incremented_upon_backup()
    {
        factory(Group::class, 6)->create();

        $this->assertEquals(1, Cache::get($this->key));
    }
}

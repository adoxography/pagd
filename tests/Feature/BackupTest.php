<?php

use App\Events\Backup;
use App\Group;

class BackupTest extends TestCase
{
    /** @test */
    public function save_number_is_set_to_1_on_initial_save()
    {
        factory(Group::class)->create();

        $this->assertEquals(1, Cache::get('num_backups'));
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

        $this->assertEquals(1, Cache::get('num_backups'));
    }
}

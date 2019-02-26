<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Backup Interval
    |--------------------------------------------------------------------------
    |
    | The database will be backed up after every __ save events.
    */
    'backup_cache_key'       => 'num_backups',
    'backup_change_interval' => 600,
    'backup_time_interval'   => 120,

    /*
    |--------------------------------------------------------------------------
    | Paradigm table order
    |--------------------------------------------------------------------------
    |
    | This is the order in which arguments should appear in the paradigm search
    */
    'paradigm_order' => [
        'AI' => [],
        'II' => [],
        'TI1' => [],
        'TI2' => [],
        'TI3' => [],
        'TA Local (2—1)' => [],
        'TA Local (1—2)' => [],
        'TA Mixed (1/2—3)' => [],
        'TA Mixed (3—1/2)' => [],
        'TA Non-local (direct)' => [],
        'TA Non-local (inverse)' => [],
        'TA Impersonal' => [],
        'TA Inanimate' => [],
        'TA Obviative (mixed 1/2–3\')' => [],
        'TA Obviative (mixed 3\'–1/2)' => [],
        'TA Obviative (non-local 3\'\')' => [],
        'TA Other' => [],
        'AI+O (+3)' => [],
        'AI+O (+0)' => [],
        'TA+O' => []
    ]
];

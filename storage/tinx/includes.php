<?php

use Ajthinking\Tinx\State;

array_set($GLOBALS, 'tinx.names', array (
  'App\\AlgPresenter' => 'al',
  'App\\AudioPresenter' => 'audiop',
  'App\\BacksUpTrait' => 'backs',
  'App\\Backup' => 'backu',
  'App\\BelongsToMorph' => 'be',
  'App\\BookmarkableTrait' => 'bo',
  'App\\ChangeType' => 'ch',
  'App\\ClosedWithAbv' => 'cl',
  'App\\DisambiguatableTrait' => 'disa',
  'App\\DiscussionCategory' => 'discussionc',
  'App\\DropboxAdapter' => 'dr',
  'App\\Group' => 'g',
  'App\\HasChildrenTrait' => 'ha',
  'App\\HideableTrait' => 'hi',
  'App\\InteractsAcrossFilesystems' => 'i',
  'App\\LanguageAssetName' => 'languagea',
  'App\\LanguagePresenter' => 'languagep',
  'App\\LocatableTrait' => 'lo',
  'App\\MarkdownPresenter' => 'm',
  'App\\Post' => 'po',
  'App\\PresenterInterface' => 'pr',
  'App\\ReconstructableTrait' => 'rec',
  'App\\RuleType' => 'rulet',
  'App\\SourceableTrait' => 'sourcea',
  'App\\SubscribeableInterface' => 'su',
  'App\\TicketType' => 'tickett',
  'App\\UserRole' => 'userr',
));

function forgetName($class) {
    array_forget($GLOBALS, "tinx.names.$class");
}

/**
 * The function used to restart tinker.
 * */
function re() {
    State::requestRestart();
    exit();
}

/**
 * Helper to handle all u(x [y, z]) calls.
 * */
function getQueryInstance($class, ...$args)
{
    $totalArgs = count($args);

    /**
     * Zero arguments (i.e. u() returns "App\User").
     * */
    if ($totalArgs === 0) {
        return $class; // Return a clean starting point for the query builder.
    }

    /**
     * One argument (i.e. u(2) returns App\User::find(2)).
     * */
    if ($totalArgs === 1) {
        $arg = $args[0];

        /**
         * Int? Use "find()".
         * */
        if (is_int($arg)) {
            return $class::find($arg);
        }

        /**
         * String? Search all columns.
         * */
        if (is_string($arg)) {
            if ($class::first() === null) {
                throw new Exception("You can only search where there is data. There is no way for Tinx to get a column listing for a model without an existing instance...");
            }
            $columns = Schema::getColumnListing($class::first()->getTable());
            $query = $class::select('*');
            foreach ($columns as $column) {
                $query->orWhere($column, 'like', '%'.$arg.'%');
            }
            return $query->get();
        }

        throw new Exception("Don't know what to do with this datatype. Please make PR.");
    }

    /**
     * The query builder's "where" method accepts up to 4 arguments, but let's lock it to 3.
     * Two arguments (i.e. u("name", "Anders") returns App\User::where("name", "Anders")).
     * Three arguments (i.e. u("id", ">", 1) returns App\User::where("id", ">", 1)).
     * */
    if ($totalArgs >= 2 && $totalArgs <= 3) {
        return $class::where(...$args)->get();
    }
    
    throw new Exception("Too many arguments!");
}

/**
 * Insert "first" and "last" variables (e.g. '$u', '$u_', etc) and model functions (e.g. 'u()', etc).
 * For "first" variable, returns "::first()" if class DB table exists, otherwise "new" (if 'tableless_models' set to true).
 * For "last" variable, returns "::latest()->first()" if class DB table exists, otherwise "new" (if 'tableless_models' set to true).
 * */
$latestColumn = config('tinx.latest_column', 'created_at');
try {
    $al = App\AlgPresenter::first() ?: new App\AlgPresenter;
    $al_ = App\AlgPresenter::latest($latestColumn)->first() ?: new App\AlgPresenter;
    if (!function_exists('al')) {
        function al(...$args) {
            return getQueryInstance('App\AlgPresenter', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\AlgPresenter');
    }
try {
    $audiop = App\AudioPresenter::first() ?: new App\AudioPresenter;
    $audiop_ = App\AudioPresenter::latest($latestColumn)->first() ?: new App\AudioPresenter;
    if (!function_exists('audiop')) {
        function audiop(...$args) {
            return getQueryInstance('App\AudioPresenter', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\AudioPresenter');
    }
try {
    $backs = App\BacksUpTrait::first() ?: new App\BacksUpTrait;
    $backs_ = App\BacksUpTrait::latest($latestColumn)->first() ?: new App\BacksUpTrait;
    if (!function_exists('backs')) {
        function backs(...$args) {
            return getQueryInstance('App\BacksUpTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\BacksUpTrait');
    }
try {
    $backu = App\Backup::first() ?: new App\Backup;
    $backu_ = App\Backup::latest($latestColumn)->first() ?: new App\Backup;
    if (!function_exists('backu')) {
        function backu(...$args) {
            return getQueryInstance('App\Backup', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\Backup');
    }
try {
    $be = App\BelongsToMorph::first() ?: new App\BelongsToMorph;
    $be_ = App\BelongsToMorph::latest($latestColumn)->first() ?: new App\BelongsToMorph;
    if (!function_exists('be')) {
        function be(...$args) {
            return getQueryInstance('App\BelongsToMorph', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\BelongsToMorph');
    }
try {
    $bo = App\BookmarkableTrait::first() ?: new App\BookmarkableTrait;
    $bo_ = App\BookmarkableTrait::latest($latestColumn)->first() ?: new App\BookmarkableTrait;
    if (!function_exists('bo')) {
        function bo(...$args) {
            return getQueryInstance('App\BookmarkableTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\BookmarkableTrait');
    }
try {
    $ch = App\ChangeType::first() ?: new App\ChangeType;
    $ch_ = App\ChangeType::latest($latestColumn)->first() ?: new App\ChangeType;
    if (!function_exists('ch')) {
        function ch(...$args) {
            return getQueryInstance('App\ChangeType', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\ChangeType');
    }
try {
    $cl = App\ClosedWithAbv::first() ?: new App\ClosedWithAbv;
    $cl_ = App\ClosedWithAbv::latest($latestColumn)->first() ?: new App\ClosedWithAbv;
    if (!function_exists('cl')) {
        function cl(...$args) {
            return getQueryInstance('App\ClosedWithAbv', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\ClosedWithAbv');
    }
try {
    $disa = App\DisambiguatableTrait::first() ?: new App\DisambiguatableTrait;
    $disa_ = App\DisambiguatableTrait::latest($latestColumn)->first() ?: new App\DisambiguatableTrait;
    if (!function_exists('disa')) {
        function disa(...$args) {
            return getQueryInstance('App\DisambiguatableTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\DisambiguatableTrait');
    }
try {
    $discussionc = App\DiscussionCategory::first() ?: new App\DiscussionCategory;
    $discussionc_ = App\DiscussionCategory::latest($latestColumn)->first() ?: new App\DiscussionCategory;
    if (!function_exists('discussionc')) {
        function discussionc(...$args) {
            return getQueryInstance('App\DiscussionCategory', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\DiscussionCategory');
    }
try {
    $dr = App\DropboxAdapter::first() ?: new App\DropboxAdapter;
    $dr_ = App\DropboxAdapter::latest($latestColumn)->first() ?: new App\DropboxAdapter;
    if (!function_exists('dr')) {
        function dr(...$args) {
            return getQueryInstance('App\DropboxAdapter', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\DropboxAdapter');
    }
try {
    $g = App\Group::first() ?: new App\Group;
    $g_ = App\Group::latest($latestColumn)->first() ?: new App\Group;
    if (!function_exists('g')) {
        function g(...$args) {
            return getQueryInstance('App\Group', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\Group');
    }
try {
    $ha = App\HasChildrenTrait::first() ?: new App\HasChildrenTrait;
    $ha_ = App\HasChildrenTrait::latest($latestColumn)->first() ?: new App\HasChildrenTrait;
    if (!function_exists('ha')) {
        function ha(...$args) {
            return getQueryInstance('App\HasChildrenTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\HasChildrenTrait');
    }
try {
    $hi = App\HideableTrait::first() ?: new App\HideableTrait;
    $hi_ = App\HideableTrait::latest($latestColumn)->first() ?: new App\HideableTrait;
    if (!function_exists('hi')) {
        function hi(...$args) {
            return getQueryInstance('App\HideableTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\HideableTrait');
    }
try {
    $i = App\InteractsAcrossFilesystems::first() ?: new App\InteractsAcrossFilesystems;
    $i_ = App\InteractsAcrossFilesystems::latest($latestColumn)->first() ?: new App\InteractsAcrossFilesystems;
    if (!function_exists('i')) {
        function i(...$args) {
            return getQueryInstance('App\InteractsAcrossFilesystems', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\InteractsAcrossFilesystems');
    }
try {
    $languagea = App\LanguageAssetName::first() ?: new App\LanguageAssetName;
    $languagea_ = App\LanguageAssetName::latest($latestColumn)->first() ?: new App\LanguageAssetName;
    if (!function_exists('languagea')) {
        function languagea(...$args) {
            return getQueryInstance('App\LanguageAssetName', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\LanguageAssetName');
    }
try {
    $languagep = App\LanguagePresenter::first() ?: new App\LanguagePresenter;
    $languagep_ = App\LanguagePresenter::latest($latestColumn)->first() ?: new App\LanguagePresenter;
    if (!function_exists('languagep')) {
        function languagep(...$args) {
            return getQueryInstance('App\LanguagePresenter', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\LanguagePresenter');
    }
try {
    $lo = App\LocatableTrait::first() ?: new App\LocatableTrait;
    $lo_ = App\LocatableTrait::latest($latestColumn)->first() ?: new App\LocatableTrait;
    if (!function_exists('lo')) {
        function lo(...$args) {
            return getQueryInstance('App\LocatableTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\LocatableTrait');
    }
try {
    $m = App\MarkdownPresenter::first() ?: new App\MarkdownPresenter;
    $m_ = App\MarkdownPresenter::latest($latestColumn)->first() ?: new App\MarkdownPresenter;
    if (!function_exists('m')) {
        function m(...$args) {
            return getQueryInstance('App\MarkdownPresenter', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\MarkdownPresenter');
    }
try {
    $po = App\Post::first() ?: new App\Post;
    $po_ = App\Post::latest($latestColumn)->first() ?: new App\Post;
    if (!function_exists('po')) {
        function po(...$args) {
            return getQueryInstance('App\Post', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\Post');
    }
try {
    $pr = App\PresenterInterface::first() ?: new App\PresenterInterface;
    $pr_ = App\PresenterInterface::latest($latestColumn)->first() ?: new App\PresenterInterface;
    if (!function_exists('pr')) {
        function pr(...$args) {
            return getQueryInstance('App\PresenterInterface', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\PresenterInterface');
    }
try {
    $rec = App\ReconstructableTrait::first() ?: new App\ReconstructableTrait;
    $rec_ = App\ReconstructableTrait::latest($latestColumn)->first() ?: new App\ReconstructableTrait;
    if (!function_exists('rec')) {
        function rec(...$args) {
            return getQueryInstance('App\ReconstructableTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\ReconstructableTrait');
    }
try {
    $rulet = App\RuleType::first() ?: new App\RuleType;
    $rulet_ = App\RuleType::latest($latestColumn)->first() ?: new App\RuleType;
    if (!function_exists('rulet')) {
        function rulet(...$args) {
            return getQueryInstance('App\RuleType', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\RuleType');
    }
try {
    $sourcea = App\SourceableTrait::first() ?: new App\SourceableTrait;
    $sourcea_ = App\SourceableTrait::latest($latestColumn)->first() ?: new App\SourceableTrait;
    if (!function_exists('sourcea')) {
        function sourcea(...$args) {
            return getQueryInstance('App\SourceableTrait', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\SourceableTrait');
    }
try {
    $su = App\SubscribeableInterface::first() ?: new App\SubscribeableInterface;
    $su_ = App\SubscribeableInterface::latest($latestColumn)->first() ?: new App\SubscribeableInterface;
    if (!function_exists('su')) {
        function su(...$args) {
            return getQueryInstance('App\SubscribeableInterface', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\SubscribeableInterface');
    }
try {
    $tickett = App\TicketType::first() ?: new App\TicketType;
    $tickett_ = App\TicketType::latest($latestColumn)->first() ?: new App\TicketType;
    if (!function_exists('tickett')) {
        function tickett(...$args) {
            return getQueryInstance('App\TicketType', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\TicketType');
    }
try {
    $userr = App\UserRole::first() ?: new App\UserRole;
    $userr_ = App\UserRole::latest($latestColumn)->first() ?: new App\UserRole;
    if (!function_exists('userr')) {
        function userr(...$args) {
            return getQueryInstance('App\UserRole', ...$args);
        }
    }
} catch (\Illuminate\Database\QueryException $e) {
        forgetName('App\UserRole');
    }
unset($latestColumn);

/**
 * Return quick reference array.
 * */
function names() {
    return array_get($GLOBALS, 'tinx.names');
}

/**
 * Quick reference array.
 * */
$names = names();
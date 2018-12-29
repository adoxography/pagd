@auth
<aside class="icons">
    <a title="Bookmark">
        <alg-bookmark uri="{{ route("$namespace::bookmark", [$model->id]) }}"
                      bookmarked="{{ $model->isBookmarkedBy() }}">
        </alg-bookmark>
    </a>

    @can('add content')
        <a href="{{ route("$namespace::clone", [$model->id]) }}" title="Clone">
        <span class="icon">
            <i class="fas fa-copy"></i>
        </span>
    </a>

    <a href="{{ route("$namespace::edit", [$model->id]) }}" title="Edit">
        <span class="icon">
            <i class="fas fa-edit"></i>
        </span>
    </a>
    @endcan

    @can('delete content')
    @component('components.form.inline', [
        'action' => route("$namespace::delete", [$model->id]),
        'method' => 'DELETE',
        'confirm' => true
    ])
        <span class="icon" title="Delete">
            <i class="fas fa-trash"></i>
        </span>
    @endcomponent
    @endcan
</aside>
@endauth

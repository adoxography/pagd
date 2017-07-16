@if ($paginator->hasPages())
    <ul class="pagination">
        {{-- Previous Page Link --}}
        <li>
            <a class="button" @if($paginator->onFirstPage()) disabled="disabled" @endif href="{{ $paginator->previousPageUrl() }}" rel="prev">
                <span class="icon">
                    <i class="fa fa-angle-double-left"></i>
                </span>
            </a>
        </li>

        {{-- Next Page Link --}}
        <li>
            <a class="button" href="{{ $paginator->nextPageUrl() }}" @if(!$paginator->hasMorePages()) disabled="disabled" @endif rel="prev">
                <span class="icon">
                    <i class="fa fa-angle-double-right"></i>
                </span>
            </a>
        </li>
    </ul>
@endif

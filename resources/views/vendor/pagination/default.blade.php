@if ($paginator->hasPages())
    <ul class="pagination">
        <li>
            <a class="button" @if($paginator->onFirstPage()) disabled="disabled" @endif href="{{ $paginator->previousPageUrl() }}" rel="prev">
                <span class="icon">
                    <i class="fa fa-angle-double-left"></i>
                </span>
            </a>
        </li>

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="disabled"><span>{{ $element }}</span></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li class="active"><span>{{ $page }}</span></li>
                    @else
                        <li><a href="{{ $url }}">{{ $page }}</a></li>
                    @endif
                @endforeach
            @endif
        @endforeach

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

@extends('igt.show')

<style>
.igt-table {
    margin-bottom: 1.5em;
}

.igt-table td {
    padding: 0 .5em;
}
</style>

@section('content')
    <div class="columns">
        <div class="column is-half">
            <div class="field">
				<span class="is-one-line">
                    <label class="label">Language:</label>
                    {!! $igt->language->present('link') !!}
				</span>
            </div>
        </div>
    </div>

    <table class="igt-table">
        <tbody>
            @foreach($igt->lines as $line)
                <tr>
                    <th>{{ $line->type->name }}</th>
                    @if($line->isAligning())
                        @foreach($line->tokens() as $token)
                            <td>{{ $token }}</td>
                        @endforeach
                    @else
                        <td colspan="{{ $igt->maxTokens() }}">{{ $line->text }}</td>
                    @endif
                </tr>
            @endforeach
        </tbody>
    </table>

    <div class="columns">
        <div class="column is-half">
			@if($igt->publicNotes)
				<div class="field">
					<span class="label">Public notes</span>
					{!! replaceTags($igt->publicNotes, $igt->language_id) !!}
				</div>
			@endif
        </div>

        <div class="column is-half">
			@if(Auth::user() && Auth::user()->hasPermissionTo('add content') && $igt->privateNotes)
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($igt->privateNotes, $igt->language_id) !!}
				</div>
			@endif
        </div>
    </div>

    <div class="field">
        <span class="label">Sources</span>
        @include('components.model.sourcelist', ['sources' => $igt->sources])
    </div>
@endsection

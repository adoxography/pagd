@extends('layout')

@section('title')
    Add
@endsection

@section('content')
    <ul>
        <li>
            <a href="/languages/create">Language</a>
        </li>
        <li>
            <a href="/groups/create">Group</a>
        </li>
        <li>
            <a href="/sources/create">Source</a>
        </li>
        <br>
        <li>
            <a href="/verbs/forms/create">Verb form</a>
        </li>
        <li>
            <a href="/nominals/forms/create">Nominal form</a>
        </li>
        <li>
            <a href="/nominals/paradigms/create"><nobr>Nominal paradigm</nobr></a>
        </li>
        <li>
            <a href="/examples/create">Form example</a>
        </li>
        <br>
        <li>
            <a href="/morphemes/create">Morpheme</a>
        </li>
        <li>
            <a href="/changes"><nobr>Initial Change</nobr></a>
        </li>
        <li>
            <a href="/glosses/create">Gloss</a>
        </li>
        <li>
            <a href="/slots/create">Slot</a>
        </li>
        <br>
        <li>
            <a href="/phonemes/create">Phoneme/Cluster</a>
        </li>
        <li>
            <a href="/reflexes/create">Reflex</a>
        </li>
        <li>
            <a href="/rules/create">Rule</a>
        </li>
        <br>
        <li>
            <a href="/variables/create">Variable</a>
        </li>
        <li>
            <a href="/datapoints/create">Datapoint</a>
        </li>
    </ul>
@endsection

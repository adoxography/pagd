@extends('layout')

@section('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.css" />
@endsection

@section('content')
    <div id="network"></div>
@endsection

@section('scripts')
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.js"></script>
    <script type="text/javascript">
        var nodes = [
            { id: 1, label: 'Node 1', level: 0 },
            { id: 2, label: 'Node 2', level: 1 },
            { id: 3, label: 'Node 3', level: 1 },
            { id: 4, label: 'Node 4', level: 0 },
        ];

        var edges = [
            { from: 1, to: 2, arrows: 'to' },
            { from: 1, to: 3, arrows: 'to' },
            { from: 4, to: 2, arrows: 'to' },
        ];

        var container = document.getElementById('network');

        var data = {
            nodes: new vis.DataSet(nodes),
            edges: new vis.DataSet(edges)
        };

        var options = {
            layout: {
                hierarchical: {
                    direction: "UD"
                }
            }
        };

        var network = new vis.Network(container, data, options);
    </script>
@endsection

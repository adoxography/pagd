@extends('layout', ['title' => 'Batch upload'])

@section('title')
    Batch upload
@endsection

@section('content')
    <p>Please use <a href="https://docs.google.com/spreadsheets/d/1v2Jl1nefI0sSvHBlT07SjMRlfoLPH989OBkWT4PJ0ZM/edit?usp=sharing">this spreadsheet</a> to prepare data for a batch upload.</p>
    <br />
    <form method="POST" action="/verbs/batch" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class="field">
            <div id="file-wrapper" class="file has-name is-boxed">
                <label class="file-label" style="margin: auto;">
                    <input id="file-input" class="file-input" type="file" name="tsv" />
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fa fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Choose a file...
                        </span>
                    </span>
                    <span id="file-name" class="file-name"></span>
                </label>
            </div>
        </div>

        <div class="field has-text-centered">
            <button id="batch-submit-button" class="button" type="submit" disabled="disabled" style="width: 13em;">Upload</button>
        </div>
    </form>
@endsection

@section('scripts')
<script>
    let batchFileInput = document.getElementById('file-input');
    let batchFileName = document.getElementById('file-name');
    let batchFileWrapper = document.getElementById('file-wrapper');
    let batchSubmitButton = document.getElementById('batch-submit-button');

    batchFileInput.onchange = function () {
        if (batchFileInput.files.length > 0) {
            batchFileName.innerHTML = batchFileInput.files[0].name;
            batchFileWrapper.classList.add('is-success');
            batchSubmitButton.disabled = null;
        }
    };
</script>
@endsection

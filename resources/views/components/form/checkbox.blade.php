<p class="control">
  <label class="checkbox">
    <input type="checkbox" value="{{ $value }}" name="{{ $name or '' }}" {{ isset($checked) && $checked == 'true' ? 'checked' : '' }}>
    {{ $label }}
  </label>
</p>
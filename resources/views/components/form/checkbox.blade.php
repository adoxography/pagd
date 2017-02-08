<p class="control">
  <label class="checkbox">
    <input type="checkbox" value="{{ $value or true }}" name="{{ $name or '' }}" {{ isset($checked) && ($checked == 'true' || $checked == '1') ? 'checked' : '' }}>
    {{ $label }}
  </label>
</p>
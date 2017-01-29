<p class="control">
  <label class="checkbox">
    <input type="checkbox" value="{{ $value }}" name="{{ $name or '' }}" {{ $checked == 'true' ? 'checked' : '' }}>
    {{ $label }}
  </label>
</p>
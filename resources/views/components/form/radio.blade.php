<p class="control">
  <label class="radio">
    <input type="radio" value="{{ $value }}" name="{{ $name or '' }}" {{ isset($checked) && $checked ? 'checked' : '' }}>
    {{ $label }}
  </label>
</p>
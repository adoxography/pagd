<nav class="detail-menu">
    @foreach($routes as $route => $label)
    <?php $tokens = explode('|', $route); ?>
    <a href="{{ route("$namespace::${tokens[0]}", ['id' => $model->slug ?? $model->id]) }}"
       class="nav-item
       <?php
           foreach ($tokens as $token) {
               if (Route::is("$namespace::$token")) {
                   echo 'is-active';
                   break;
               }
           }
       ?>
       ">
       {{ $label }}
    </a>
    @endforeach
</nav>

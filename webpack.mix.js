let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.autoload({
   jquery: ['$', 'window.jQuery']
});

mix.webpackConfig({
  externals: {
    tinymce: 'tinymce'
  },

  module: {
    rules: [
        {
            test: require.resolve('tinymce/tinymce'),
            loaders: [
                'imports-loader?this=>window',
                'exports?window.tinymce'
            ]
        },

        {
            test: /tinymce\/(themes|plugins)\//,
            loaders: [
                'imports-loader?this=>window'
            ]
        },

        {
            test: /\.pug$/,
            loader: 'pug-plain-loader'
        }
    ]
  }
});

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copy('resources/assets/libs/font-awesome/fonts', 'public/build/fonts')
   .version();

// mix.browserSync('algling.dev');
// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setCachePath('some/folder');
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.

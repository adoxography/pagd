const elixir = require('laravel-elixir');
const gutils = require('gulp-util');
var browserify = elixir.config.js.browserify;

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.cssOutput = '/../public/css';

elixir(mix => {
    mix.sass('style.scss', 'resources/assets/css/style.css')
       .styles(
       	[
       		'resources/assets/css/normalize.css',
       		'resources/assets/css/style.css'
       	], 'public/css/style.css')
       .version('css/style.css');

    mix.scripts([
    	'vendor/vue.js',
    	'vendor/axios.js'
    ], 'public/js/vendor.js');
});

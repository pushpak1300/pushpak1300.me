const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js("js/all.js", "build/app.js");

mix.styles(["bootstrap/css/bootstrap.css"], "build/all.css");

mix.styles(
  ["fonts/fontawesome-all.min.css", "fonts/font-awesome.min.css"],
  "build/font.css"
);


mix.disableNotifications();
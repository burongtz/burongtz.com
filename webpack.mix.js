let mix = require('laravel-mix');

mix
    .sass('src/scss/app.scss', 'css/')
    .copy('src/index.html', 'dist/')
    .setPublicPath('dist');

let mix = require('laravel-mix');

mix.pug = require('laravel-mix-pug-recursive');

mix
    .sass('src/scss/app.scss', 'css/')
    .pug('src/pug/pages/**/*.pug', 'dist', {
        excludePath: 'src/pug/pages',
    })
    .setPublicPath('dist');

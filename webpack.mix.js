let mix = require('laravel-mix');

mix.pug = require('laravel-mix-pug-recursive');

const urlProd = 'https://burongtz.com';
const urlLocal = 'http://127.0.0.1:8081';

const pugOptions = {
    locals: {
        config: {
            baseUrl: mix.inProduction() ? urlProd : urlLocal,
        },
    },
    excludePath: 'src/pug/pages',
};

mix.sass('src/scss/app.scss', 'css/')
    .pug('src/pug/pages/**/*.pug', 'dist', pugOptions)
    .copy('src/images/favicon.ico', 'dist')
    .setPublicPath('dist');

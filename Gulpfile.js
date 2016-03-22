'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev serve
var open = require('gulp-open'); //Open a URL in browser
var browserify = require('browserify'); //Bundle JS
var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with gulp
var concat = require('gulp-concat'); //Concatenates files
var eslint = require('gulp-eslint'); //Lints JS and JSX

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.ejs',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.theme.min.js'
        ],
        js: './src/app/**/*.js',
        images: './src/content/images/*',
        dist: './dist',
        mainJs: './src/app/main.js'
    }
}

//Start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/index.html'}));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('serve', ['html', 'css', 'js', 'images', 'lint', 'open', 'watch']);

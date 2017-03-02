var fs = require('fs');
var gulp = require('gulp');

var build = 'html';

// Retrieve Github pins
gulp.task('github', function() {
    var eeyore = require('eeyore');
    return repos = eeyore('andrewsosa001', {

    }).then(repos => {
        var data = JSON.stringify({repos: repos});
        fs.writeFile('src/github.json', data);
    });

});

// Compiles .pug files into .html
gulp.task('pug', ['github'], function() {
    var pug = require('gulp-pug');
    var data = require('gulp-data');
    var locals = require('./src/locals.js');
    gulp.src('src/pug/*.pug')
        .pipe(data(files => {
            return require('./src/github.json');
        }))
        .pipe(pug({
            locals: locals
        }).on('error', console.log))
        .pipe(gulp.dest(build));
});

// Compiles .sass into .css
gulp.task('sass', function() {
    var sass = require('gulp-sass');
    gulp.src('src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest(build + '/css/'));
});

// Copies bootstrap files into build
gulp.task('bootstrap', function() {
    gulp.src('src/static/bootstrap/*.css')
        .pipe(gulp.dest(build + '/css/'));
    gulp.src('src/static/bootstrap/*.js')
        .pipe(gulp.dest(build + '/js/'))
});

// Copies assets into build
gulp.task('assets', ['favicon'], function() {
    gulp.src('src/static/assets/*')
        .pipe(gulp.dest(build + '/assets/'))
});

// Copy favicons into place
gulp.task('favicon', function() {
    gulp.src('src/static/favicon/*')
        .pipe(gulp.dest(build));
});

// Removes built files
gulp.task('clean', function() {
    var clean = require('gulp-clean');
    gulp.src('html/**', {read:false})
        .pipe(clean());
});

// Monitors .pug and .sass
gulp.task('watch', function() {
    gulp.watch('src/**', ['pug', 'sass']);
});

// Single time build of files
gulp.task('build', ['pug', 'sass', 'bootstrap', 'assets']);
gulp.task('default', ['build']);


gulp.task('repos', () => {
    repos.then(res => {
        console.log(res)
    })
});

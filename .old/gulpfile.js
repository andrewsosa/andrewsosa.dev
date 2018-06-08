const fs = require('fs');
const gulp = require('gulp');
const flatten = require('gulp-flatten')

var locals = require('./src/locals.js');

var build = 'html';
var json = './src/json/'


// Main Build tasks

gulp.task('pug', ['github'], function() {
    const pug    = require('gulp-pug');
    const data   = require('gulp-data');
    const locals = require('./src/locals.js');

    gulp.src(['src/views/*/*.pug', '!src/views/_includes/**'])
        .pipe(data(files => { return require(json + 'github.json'); }))
        .pipe(pug({locals: locals}))
        .on('error', console.log)
        .pipe(flatten())
        .pipe(gulp.dest(build));
});

gulp.task('sass', function() {
    const sass = require('gulp-sass');
    const paths = ['src/public/'];
    gulp.src('src/views/*/*.sass')
        .pipe(sass({includePaths: paths})
            .on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest(build + '/css'));
});

// Resource tasks

gulp.task('github', function() {
    var eeyore = require('eeyore');
    return repos = eeyore(locals.me, {}).then(repos => {
        var data = JSON.stringify({repos: repos});
        fs.writeFile(json + 'github.json', data);
    });

});

gulp.task('assets', function() {
    gulp.src('src/public/assets/*')
        .pipe(gulp.dest(build + '/public/'))
    gulp.src('src/public/favicon/*')
        .pipe(gulp.dest(build));

});


// Utility tasks

gulp.task('clean', function() {
    var clean = require('gulp-clean');
    gulp.src('html/**', {read:false})
        .pipe(clean());
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/views/**/*.pug', ['pug']);
    gulp.watch('src/views/**/*.sass', ['sass']);
    gulp.watch('src/public/**', ['assets']);
    gulp.watch('src/locals.js', ['pug'])
});

gulp.task('views', ['pug', 'sass']);
gulp.task('build', ['views', 'assets']);
gulp.task('default', ['build']);

gulp.task('repos', () => {
    repos.then(res => {
        console.log(res)
    })
});

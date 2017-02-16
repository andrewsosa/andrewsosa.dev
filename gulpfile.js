var gulp = require('gulp');
var sass = require('gulp-sass');
var pug  = require('gulp-pug');

// Compiles .pug files into .html
gulp.task('pug', function buildHTML() {
  return gulp.src('src/*.pug')
	  .pipe(pug())
		.pipe(gulp.dest('build')); // tell gulp our output folder
});

// Compiles .sass into .css
gulp.task('sass', function() {
	gulp.src('src/sass/*.sass')
		.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css/'));
});

// Monitors .pug and .sass
gulp.task('watch', function() {
	gulp.watch('src/**', ['pug', 'sass']);
});

gulp.task('test', function() {
  // place code for your default task here
	console.log("hello, world!")
});

gulp.task('default', ['watch']);

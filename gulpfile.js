var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(pug())
	.pipe(gulp.dest('build')); // tell gulp our output folder
});

gulp.task('test', function() {
  // place code for your default task here
	console.log("hello, world!")
});

gulp.task('default', ['pug']);

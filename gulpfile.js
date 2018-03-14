var gulp = require('gulp'),
    mmq  = require('gulp-merge-media-queries'),
    webp = require('gulp-webp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(mmq())
    .pipe(gulp.dest('src/'));
});

gulp.task('webp', function () {
  return gulp.src('src/img/**/*.*')
    .pipe(webp({quality: 100}))
    .pipe(gulp.dest('src/img/'));
});


gulp.task('sass:watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('webp:watch', function () {
  gulp.watch('src/img/**/*.*', ['webp']);
});


gulp.task('default', [ 'sass', 'sass:watch', 'webp:watch' ]);

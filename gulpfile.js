var gulp = require('gulp')
// var newer = require('gulp-newer')
var webp = require('gulp-webp')
// mmq = require('gulp-merge-media-queries'),
// sass = require('gulp-sass')

// gulp.task('sass', function () {
//   return gulp.src('scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(mmq())
//     .pipe(gulp.dest('src/'));
// });

gulp.task('webp', function() {
  return (
    gulp
      .src(['src/**/*.*', '!src/favicon-*.*'])
      // .pipe(newer('src/'))
      .pipe(webp({ quality: 100 }))
      .pipe(gulp.dest('src/'))
  )
})

// gulp.task('default', ['webp'])

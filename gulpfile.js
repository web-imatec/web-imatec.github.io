var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');

gulp.task('minimg_imatec', function(){
    gulp.src(['assets/img/imatec/nosotros_imatec.jpg'])
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/imatec/'))
});

gulp.task('minjs', function(){
   gulp.src('src/scripts/*.js')
   .pipe(concat('min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('build/js/'));
});

gulp.task('mincss', function(){
   gulp.src(['assets/css/bootstrap.min.css', 'assets/css/main.css', 'assets/css/main.css', 'assets/extras/animate.css', 'assets/extras/lightbox.css', 'assets/css/imatec_custom.css'])
   .pipe(concat('min.css'))
   .pipe(minify())
   .pipe(gulp.dest('build/css/'));
});

gulp.task('default',['mincss', 'minimg_imatec'],function(){
});

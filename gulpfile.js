var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    es = require('event-stream');

gulp.task('styles', function(){
    var bootstrap = gulp.src('./public/css/bootstrap.min.css');
    var scss = gulp.src('./public/scss/style.scss');
    var css = gulp.src('./public/css/style.css');

    return es.merge(bootstrap,scss,css)
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./public/dist'));
});

// gulp.task('scripts', ['styles'], function(){
    // var js = gulp.src('./public/js/*.js');

    // return es.merge(js)
    // .pipe(concat('scripts.min.js'))
    // .pipe(uglify())
    // .pipe(gulp.dest('./public/dist'));
// });

gulp.task('scripts', ['styles'], function(){
    var js = gulp.src(['./public/js/jquery-3.1.1.js','./public/js/utils.js','./public/js/start.js','./public/js/bootstrap.min.js']);

    return es.merge(js)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch',['scripts'], function(){
    gulp.watch('public/js/*.js', ['scripts']);
    gulp.watch('public/css/*.css',['styles']);
    gulp.watch('public/scss/*.scss',['styles']);
});

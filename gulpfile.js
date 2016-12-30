var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    es = require('event-stream');

gulp.task('style', function(){
    var scss = gulp.src('./public/scss/style.scss');
    var css = gulp.src('./public/css/style.css');
    
    return es.merge(scss,css)
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('minify', ['style'], function(){
    var js = gulp.src('./public/js/*.js');

    return es.merge(js)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch',['minify'], function(){
    gulp.watch('scripts/*.js', ['minify']);
});

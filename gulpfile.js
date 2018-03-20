var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default', function () {
    gulp.src(['./js/game.js', './js/extension/*.js', './js/function/*.js', './js/callback/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));

    gulp.src('./dist/all.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('dist'))
});
/**
 * Created by LILINPING on 2017/3/1.
 */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {

    gulp.src('app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});
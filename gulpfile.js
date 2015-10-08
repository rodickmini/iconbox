var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var rename = require('gulp-rename');

gulp.task('cleanup', function() {
    return gulp.src('dist', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('js', ['cleanup'], function () {
    return gulp.src('jquery-iconbox.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
    gulp.run('js');
    gulp.watch('jquery-iconbox.js', ['js']);
});

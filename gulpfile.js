var gulp = require('gulp');
var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('default', function() {
    return gulp.src('jquery-iconbox.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

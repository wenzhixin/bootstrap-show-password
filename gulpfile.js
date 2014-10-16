var fs = require('fs'),
    gulp = require('gulp'),
    del = require('del'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    pkg = require('./package.json'),
    banner;

banner = [
    '/**',
    ' * @author <%= pkg.author %>',
    ' * https://github.com/wenzhixin/bootstrap-show-password',
    ' * version: <%= pkg.version %>',
    ' */',
    ''].join('\n');

gulp.task('clean', function(cb) {
    del(['./bootstrap-show-password.min.js'], cb);
});

gulp.task('js', ['clean'], function () {
    gulp.src('bootstrap-show-password.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['js']);

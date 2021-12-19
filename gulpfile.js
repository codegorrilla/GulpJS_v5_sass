'use strict';

const {series} = require('gulp');

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function build() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

function watch(){
  return gulp.watch('./sass/**/*.scss', gulp.series(build));
}

exports.build = build;// this is a public task
exports.default = series(build, watch);// watch is a private task
//exports.watch = watch;// watch is a public task
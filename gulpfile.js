'use strict';

const gulp = require('gulp');
const all = require('gulp-all');
const typescript = require('gulp-typescript');
const webpack = require('gulp-webpack');

const tsProject = typescript.createProject("tsconfig.json");

/* Server */
gulp.task('server-typescript', () => {
    return gulp.src([
        './src/server/*.ts',
        './src/server/**/*.ts',
    ])
    .pipe(tsProject())
    .pipe(gulp.dest('./dist'));
});
gulp.task('server', ['server-typescript']);

/* Client */
gulp.task('client-copyIndex', () => {
    return gulp.src([
        './src/client/index.html',
    ])
    .pipe(gulp.dest('./dist/public'));
});
gulp.task('client-webpack', () => {
    gulp.src('./src/client/main.tsx')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('./dist/public'));
});
gulp.task('client', ['client-copyIndex', 'client-webpack']);

/* BUILD */
gulp.task('build', ['server', 'client']);
'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const errorify = require('errorify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const eslint = require('gulp-eslint');

gulp.task('clean', (callback)=>del(['./dist/bundle.js', './build/maps/*'], callback));

let customOpts = {
    entries: ['./app.js'],
    extensions: ['.js'],
    debug: true
};

const opts = Object.assign({}, watchify.args, customOpts);
const b = browserify(opts);

b.plugin(errorify, {});
b.transform('babelify', {
    presets: ['es2015', 'react'],
    plugins: ['transform-merge-sibling-variables', 'transform-minify-booleans']
});
b.on('update', lint);
b.on('update', bundle);
b.on('log', gutil.log);

gulp.task('link', lint);

gulp.task('scripts', ['lint'], bundle);

gulp.task('watch', ['lint'], ()=>{
    watchify(b);
    bundle();
});

gulp.task('all', ()=>{
    bundle();
});

function bundle(){
    return b.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist'));
}

function lint(){
    return gulp.src(['./*.js', '!gulpfile.js', '!node_modules/**'])
        .pipe(eslint({
            parseOptions: {
                ecmaVersion: 6,
                sourceType: 'script',
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                strict: 0
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

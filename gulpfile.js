var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var minify = require('gulp-minifier');
var del = require('del');


// The default task rebuilds the dist folder,
// which contains the production version of the app.
// The task first deletes the existing dist directory (if it exists),
// then copies all source files to dist,
// then adds minified versions of the source css, js, and image files.
gulp.task('default', ['copySource'], function() {
    gulp.start('minifyJS', 'minifyCSS','compressImages');
});

// compress the images
gulp.task('compressImages', function() {
    return gulp.src('source/img/**/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'))
});

// minify the JavaScript
gulp.task('minifyJS', function() {
    return gulp.src('source/js/**/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist/js'));
});

// minify the CSS
gulp.task('minifyCSS', function() {
    return gulp.src('source/css/**/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('dist/css'));
});

// first delete the dist directory (if it exists),
// then copy source files to dist directory
gulp.task('copySource', ['deleteDist'], function() {
    return gulp.src('source/**/*')
        .pipe(gulp.dest('dist/'))
});

// delete the dist directory (if it exists)
gulp.task('deleteDist', function() {
    del('dist');
});


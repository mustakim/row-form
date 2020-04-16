var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', function() {
        browserSync.reload();
    })

    watch('./app/style.css', function() {
        browserSync.reload();
    })

    watch('./app/main.js', function() {
        browserSync.reload();
    })
});

// gulp.task('cssInject', ['styles'], function(){
//     return gulp.src('./app/temp/styles/styles.css')
//         .pipe(browserSync.stream());
// });
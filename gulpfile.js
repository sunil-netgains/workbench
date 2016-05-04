var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./source/**/*")
    .pipe(deploy("./dist/**/*"));
})

// Run gulp's default task 
gulp.task('default',['deploy']);

var gulp        = require('gulp');
var gitDeploy = require('gulp-git-deploy');
var $        = require('gulp-load-plugins')();  // Loads in any gulp plugins that are in node_modules.
var rimraf   = require('rimraf');               // A deep deletion module for node (it helps delete folders as part of the build processes)
var sequence = require('run-sequence');         // Runs a sequence of gulp tasks in the specified order. 
var ngAnnotate = require('gulp-ng-annotate');   // Add angularjs dependency injection annotations with ng-annotate

gulp.task('clean:build', function(cb) {
  rimraf("./build/*.*", cb);
});

// Builds the entire app once
gulp.task('copy:txttobuild', function(cb) {
  return gulp.src('./abc.txt')
    .pipe(gulp.dest('./build/'));  
});

// Builds the entire app once
gulp.task('build', function(cb) {
  sequence('clean:build', 'copy:txttobuild', cb);
});

gulp.task('deploy',function(){

  return gitDeploy({remote: 'origin', name: 'master'}, function(){
    //put here whatever you want to do after merging, usually a build task.
    gulp.start('build')
  });

})
// Run gulp's default task 
gulp.task('default', ['deploy']);

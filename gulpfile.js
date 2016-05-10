var gulp        = require('gulp');
var gitDeploy = require('gulp-git-deploy');

gulp.task('deploy',function(){

  return gitDeploy({remote: 'origin', name: 'master'}, function(){
    //put here whatever you want to do after merging, usually a build task.
    //gulp.start('build')
  });

})
// Run gulp's default task 
gulp.task('default',['deploy']);

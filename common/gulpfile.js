const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

gulp.task('t2',function(){
    return gulp.src('src/**/*.js')// go to app and all of its directory get all file with ext .js
            .pipe(concat('common.js')) // combine them into 1 big file call all.js
            // .pipe(uglify())
            .on('error', function (err) { console.log(err); })
            .pipe(gulp.dest('/srv/cumeo/angularjs/dest'))
});
gulp.task('w2', function(){
  gulp.watch('src/**/*.js',gulp.series('t2')) //watch all js file in app directory. any chcange please excute task t1.
});

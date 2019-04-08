
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rigger = require('gulp-rigger');

gulp.task('html', ()=>{
    gulp.src('./src/*.html')
    .pipe(rigger())
    .pipe(
        htmlmin({
            collapseWhitespace: true,
          })
    )
    .pipe(gulp.dest('./build/'))
});

gulp.task('start', () => gulp.run('html'));


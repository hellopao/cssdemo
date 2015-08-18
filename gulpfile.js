var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass:compile',function (){
	return sass('./styles/sass/index.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./styles/'));
});

gulp.task('sass:watch',function (){
	gulp.watch('./styles/sass/*.scss',['sass:compile'])
});

gulp.task('default',['sass:watch']);
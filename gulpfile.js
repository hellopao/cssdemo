var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var group = require('gulp-group-files');

var sassFiles = {
    "blog.front" : {
        src: "./blog/front/styles/sass/index.scss",
        dest: "./blog/front/styles/"
    }
};

gulp.task('sass:compile',function (){
    return group(sassFiles,function (key,fileset){
        return sass(fileset.src)
            .on('error', function (err) {
                console.error('compile sass file error: %s', err.message);
            })
            .pipe(gulp.dest(fileset.dest));
    })();
});

gulp.task('sass:watch',function (){
    gulp.watch('**/*.scss',['sass:compile'])
});

gulp.task('default',['sass:watch']);
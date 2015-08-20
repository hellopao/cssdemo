var gulp = require('gulp');
var sass = require('gulp-sass');
var group = require('gulp-group-files');

var sassFiles = {
    "blog.front" : {
        src: "./blog/front/styles/sass/index.scss",
        dest: "./blog/front/styles/"
    },
	"blog.back" : {
        src: "./blog/back/styles/sass/index.scss",
        dest: "./blog/back/styles/"
    },
    "marry" : {
        src: "./marry/styles/sass/index.scss",
        dest: "./marry/styles/"
    }
};

gulp.task('sass:compile',function (){
    return group(sassFiles,function (key,fileset){
        return gulp.src(fileset.src)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(fileset.dest));
    })();
});

gulp.task('sass:watch',function (){
    gulp.watch('**/*.scss',['sass:compile'])
});

gulp.task('default',['sass:watch']);
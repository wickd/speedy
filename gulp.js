let gulp = require('gulp');
let coffee = require('gulp-coffee');

gulp.task('coffee', () => 
	gulp.src(['./*.coffee', '*.coffee'])
    	.pipe(coffee({ bare : true }))
    	.pipe(gulp.dest('./vanilla/'))
);

gulp.task('default', [ 'coffee' ,'nodemon', 'sass', 'sass:watch' ]);

gulp.start('coffee');
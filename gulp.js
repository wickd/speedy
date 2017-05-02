let gulp = require('gulp');
let coffee = require('gulp-coffee');
let fs = require('fs');

gulp.task('index-coffee', () => 
	gulp.src('index.coffee')
    	.pipe(coffee({ bare : true }))
    	.pipe(gulp.dest('./'))
);

gulp.task('coffee', () => 
	gulp.src(['./*.coffee', '*.coffee'])
    	.pipe(coffee({ bare : true }))
    	.pipe(gulp.dest('./vanilla/'))
);

gulp.task('default', [ 'coffee' ,'nodemon', 'sass', 'sass:watch' ]);

// gulp.start('coffee');
gulp.start('index-coffee');
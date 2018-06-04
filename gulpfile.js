var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
webshot = require('webshot');


gulp.task('html', function() {
});

gulp.task('watch', function() {
	browserSync.init({
		notify:false,
		server: {
		}
	});
	watch('index.html', function() {
		browserSync.reload();
	});

	watch('**/*.css', function() {
		browserSync.reload();
	});

	watch('**/*.js', function() {
		browserSync.reload();
	});
});



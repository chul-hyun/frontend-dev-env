import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import fs from 'fs';
import path from 'path';

const PATHS = require('./PATHS');
const config = require('./gulpfile.config').current;

const bs = browserSync.create();

gulp.task('browserSync', ['esscript'], () => {
	bs.init(config.browserSync);
});

gulp.task('esscript', (done) => {
	browserify(config.browserify)
	  .bundle()
	  .on("error", function (err) { gutil.log("Error: " + err.message); })
	  .pipe(fs.createWriteStream(PATHS.output.script.file).on('close', ()=>{
			done()
		}))
})

gulp.task('reload', ['esscript'], () => {
	bs.reload()
})

gulp.task('watch', (done) => {
	gulp.watch(`${PATHS.entry.common.dir}/**/*.js`, ['esscript', 'reload'])
		.on('change', (event)=>{
			bs.notify('File ' + path.basename(event.path) + ' was ' + event.type);
		})
})

gulp.task('default', ['esscript', 'browserSync', 'watch'])

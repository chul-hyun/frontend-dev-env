import gulp from 'gulp'
import html5Lint from 'gulp-html5-lint';

import PATHS from '../../var/PATHS'

gulp.task('lint-html', function() {
    return gulp.src([PATHS.entry.html.glob])
        .pipe(html5Lint());
});

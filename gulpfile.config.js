const PATHS = require('./PATHS');

const env = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';

const production = {
	browserSync : {
		server: {
			baseDir : PATHS.output.common.dir
		},
		open: false,
		ghostMode: false,
		reloadOnRestart: true
	},
	browserify: {
		transform : 'babelify',
		debug : false,
		entries : PATHS.entry.script.file
	}
}

const development = Object.assign({
	browserSync : {
		server: {
			baseDir : PATHS.output.common.dir
		},
		open: false,
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		},
		reloadOnRestart: true
	},
	browserify: {
		transform : 'babelify',
		debug : true,
		entries : PATHS.entry.script.file
	}
}, production)


let current = production
if( env == 'production' ) {
	current = production
} else if( env == 'development' ) {
	current = development
}

export {
	production,
	development,
	current
}

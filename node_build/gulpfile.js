const gulp = require('gulp')
const changed = require('gulp-changed')
const babel = require('gulp-babel')
const path = require('path')
const del = require('del')
const mkdirp = require('mkdirp')
const fs = require('fs');
const insert = require('gulp-insert');
const spawn = require('child_process').spawn;

const config = require('./config')

const insertComment = '\r\n\r\n/*** 자동 생성된 파일 ***/\r\n\r\n'
const prepend = insert.prepend(insertComment)

const argv = require('yargs').argv

gulp.task('clear', () => {
  return del([config.glob.dir.etc], { force: true })
});

gulp.task('mkdirp', (cb) => {
  mkdirp(config.dir.dist, cb)
});

gulp.task('esscript', () => (
  gulp.src(config.glob.src.script)
    .pipe(changed(config.dir.dist))
    .pipe(babel({extends : config.file.babelrc}))
    .pipe(gulp.dest(config.dir.dist))
));

gulp.task('copy', () => (
  gulp.src(config.glob.src.noscript)
    .pipe(changed(config.dir.dist))
    .pipe(gulp.dest(config.dir.dist))
));

gulp.task('createTaskIndex', () => {
  return new Promise((resolve, reject) => {
    let filePaths = getFilePaths(config.dir.task);

    let code = filePaths.map((filePath) => `import '.${(path.sep + path.relative(config.dir.task, filePath)).replace(/\\/g, '/')}'`).join('\r\n');

    fs.writeFile(config.file.taskIndex , code, 'utf8', (err) => {
      if (err) throw err;

      resolve();
    })
  })

  function getFilePaths(dir){
    let filePaths = [];
    let promises = [];

    let list = fs.readdirSync(dir)

    list.forEach((item) => {
      let realPath = path.join(dir, item);
      let stats = fs.statSync(realPath)

      if(stats.isFile()){
        filePaths.push(realPath)
      }
      if(stats.isDirectory()){
        filePaths = filePaths.concat(getFilePaths(realPath))
      }
    })

    return filePaths;
  }
})

let gulpExec = {
  p : false,
  start : () => {
    if(this.p) {
      this.p.kill();
    }

    console.log(`gulp --cwd "${config.dir.dist}"`);

    this.p = spawn(
      'gulp.cmd',
      {
        stdio: [process.stdin, process.stdout, process.stderr],
        cwd: config.dir.dist
      });

    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
  stop : () => {
    if(this.p) {
      console.log('process kill');
      this.p.kill();
      this.p = false;
    }

    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

gulp.task('start_gulp', () => gulpExec.start())

gulp.task('stop_gulp', () => gulpExec.stop())

gulp.task('watch', () => {
  gulp.watch([config.glob.src.etc, '!'+config.file.taskIndex], gulp.parallel('start'))
    .on('change', function(path, stats) {
        console.log('change');
    })
    .on('unlink', function(path, stats) {
        console.log('unlink');
    });
})

gulp.task('auto-reload', () => {
  var p;

  gulp.watch('gulpfile.js', spawnChildren);
  spawnChildren();

  function spawnChildren(e) {
    // kill previous spawned process
    if(p) { p.kill(); }

    // `spawn` a child `gulp` process linked to the parent `stdio`
    p = spawn('gulp.cmd', [argv.task], {stdio: 'inherit'});
  }
});

gulp.task('init', gulp.series('clear', 'mkdirp'))
gulp.task('build', gulp.parallel('copy', gulp.series('createTaskIndex', 'esscript')))
gulp.task('start', gulp.series('stop_gulp', 'build', 'start_gulp'))
gulp.task('default', gulp.series('init', 'start', 'watch'))

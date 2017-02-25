const stream  = require('stream');
const fs      = require('fs');
const path    = require('path');
const {spawn} = require('child_process');

const del    = require('del');
const mkdirp = require('mkdirp');
const Q      = require('q');

const BUILD_PATHS = require('./BUILD_PATHS');
const PATHS       = require('./var/PATHS');

const currentTask = (process.argv[2]) ? process.argv[2] : 'default';


function createTaskIndexFile(){
  return new Promise((resolve, reject) => {
    let files = getFiles(BUILD_PATHS.dir.task);

    let code = files.map((file) => `import '.${(path.sep + path.relative(BUILD_PATHS.dir.taskIndex, file)).replace(/\\/g, '/')}';`).join('\r\n');

    fs.writeFile(BUILD_PATHS.file.taskIndex, code, 'utf8', (err) => {
      if (err) throw err;

      resolve();
    })
  })

  function getFiles(dir){
    let files = [];
    let promises = [];

    let list = fs.readdirSync(dir)

    list.forEach((item) => {
      let realPath = path.join(dir, item);
      let stats = fs.statSync(realPath)

      if(stats.isFile()){
        files.push(realPath)
      }
      if(stats.isDirectory()){
        files = files.concat(getFiles(realPath))
      }
    })

    return files;
  }
}

function execGulp(){
  spawn('cmd', ['/s', '/c', `gulp ${currentTask}`], {stdio: [process.stdin, process.stdout, process.stderr]});
}

del.sync([PATHS.output.common.dir])

Q.denodeify(mkdirp)(PATHS.output.common.dir)
  .then(createTaskIndexFile)
  .then(execGulp)

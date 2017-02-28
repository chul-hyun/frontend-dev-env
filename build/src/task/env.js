const production  = 'production';
const development = 'development';
const current     = getEnv()

process.env.NODE_ENV = current;

function isDevelopment(){
  return current == development
}

function isProduction(){
  return current == production
}

function getEnv(){
  if(
    process.env.NODE_ENV &&
    ( process.env.NODE_ENV ).trim().toLowerCase() == production
  ){
    return production
  }else{
    return development
  }
}

export default {
  isDevelopment,
  isProduction,
  current
}

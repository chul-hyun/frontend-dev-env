const production  = 'production';
const development = 'development';
const current         = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == production ) ? production : development;

process.env.NODE_ENV = current;

function isDevelopment(){
  return current == development
}

function isProduction(){
  return current == production
}

export default {
  isDevelopment,
  isProduction,
  current
}

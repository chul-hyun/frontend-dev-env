import PATHS from '../var/PATHS';
import production from './production';
import development from './development';

const env = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';
process.env.NODE_ENV = env;

let current = development
if( env == 'production' ) {
  current = production
} else if( env == 'development' ) {
  current = development
}

console.log(`${env} mode`);

export default current

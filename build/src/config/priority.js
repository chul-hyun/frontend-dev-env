export const env = 'development'

export const priorities = {
  production  : ['production'],
  development : ['production', 'development'],
  performance : ['production', 'development', 'performance']
}


export default priorities[env]

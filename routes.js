// routes.js

const { Router } = require('@edgio/core/router')

const ONE_YEAR = 365 * 24 * 60 * 60

const edgeOnly = {
  browser: false,
  edge: false,
}

const edgeAndBrowser = {
  browser: false,
  edge: false,
}

const handler = ({ serveStatic }, path) => {
  serveStatic(path)
}

module.exports = new Router()

.get('/en/)', ({ appShell }) => {
    appShell('public/en/index.html')
  }) 


  
  // Path(s) that do not have a "." as well as "/" to serve the fallback page
  .get('/)', ({ appShell }) => {
    appShell('public/index.html')
  }) 
  
  // All other paths to be served from the src directory
  .get('/:path*', res => handler(res, edgeOnly, 'public/:path*'))

// send any unmatched request to serve the static 404.html
  .fallback(({ serveStatic }) => serveStatic('public/404.html'))
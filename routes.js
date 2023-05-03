// routes.js

const { Router } = require('@edgio/core/router')

router.get('/Control/path', ({ cache }) => {
  cache({
    // Other options...
    edge: {
      // Other options...
      forcePrivateCaching: true, // Force caching of `private` responses
    },
  })
})

const ONE_YEAR = 365 * 24 * 60 * 60
const ONE_SEG = 0 * 0 * 0 * 0
const edgeOnly = {
  browser: false,
  edge: { maxAgeSeconds: ONE_SEG },
}

const edgeAndBrowser = {
  browser: false,
  edge: false,
}

const handler = ({ cache, serveStatic }, cacheConfig, path) => {
  cache(cacheConfig)
  serveStatic(path)
}


module.exports = new Router()


.get('/en/)', ({ appShell, cache }) => {
    cache(edgeOnly)
    appShell('public/en/index.html')
  }) 

// Path(s) that do not have a "." as well as "/" to serve the fallback page
  .get('/)', ({ appShell, cache }) => {
    cache(edgeOnly)
    appShell('public/index.html')
  }) 
  
  // All other paths to be served from the src directory
  .get('/:path*', res => handler(res, edgeOnly, 'public/:path*'))

// send any unmatched request to serve the static 404.html
  .fallback(({ serveStatic }) => serveStatic('public/404.html'))
const siteRoute = require('./site')
const galleryRoute = require('./gallery')

function route(app) {
   app.use('/gallery', galleryRoute)
   app.use('/', siteRoute)
}

module.exports = route

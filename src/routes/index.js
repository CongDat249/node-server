const siteRoute = require('./site')
const galleryRoute = require('./gallery')

function route(app) {
   app.use('/', siteRoute);
   app.use('/gallery', galleryRoute)
}

module.exports = route;

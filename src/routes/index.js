const siteRoute = require('./site');
const galleryRoute = require('./gallery');
const courseRoute = require('./course');

function route(app) {
   app.use('/course', courseRoute);
   app.use('/gallery', galleryRoute);
   app.use('/', siteRoute);
}

module.exports = route;

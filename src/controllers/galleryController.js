class GalleryController {
   index(req, res) {
      res.render('gallery'); 
   }
}

module.exports = new GalleryController;
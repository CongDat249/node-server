const Course = require('../models/Course')

class CourseController {
   async index(req, res) {
      Course.find({}, function(err, courses) {
         if (!err) {
            courses = courses.map(course => course.toObject());
            res.render('course', { courses })
            return;
         }

         console.log('error');
      })
   }

   async detail(req, res) {
      const slug = req.params.slug;
      Course.findOne({ slug })
         .then(course => res.render('detail', { course: course.toObject() }))
         .catch()
   }
}

module.exports = new CourseController()

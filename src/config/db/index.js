const mongoose = require('mongoose');

async function connect() {
   try {
      await mongoose.connect('mongodb://localhost:27017/F8_education_dev');
      console.log('success');
   }
   catch {
      console.log('error');
   }
}

module.exports = { connect };

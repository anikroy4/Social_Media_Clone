const mongoose = require('mongoose');

exports. connectToDatabase =  () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Connected to MongoDB');
    })
}
    
const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DATABASE CONNECTED');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

connectToDatabase();

module.exports = mongoose.connection;

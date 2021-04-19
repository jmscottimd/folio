const mongoose = require('mongoose')
const connectDB = async () => {
    try {
    await mongoose.connenct(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('MongoDB connected')
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
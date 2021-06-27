const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Db Online');
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar la db");
    }
}

module.exports = {
    dbConnection
}
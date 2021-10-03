const mongoose = require('mongoose');
const url = process.env.NODE_ENV === "production" ? 
process.env.PROD_MONGO_URL : process.env.DEV_MONGO_URL;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const db = mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the mongodb database")
}).catch((error) => {
    console.log(error);
});

module.exports = db;
const mongoose = require('mongoose');
const url = process.env.DEV_MONGO_URL;
const dbName = "loan-management";

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const db = mongoose.connect(url+dbName, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the mongodb database")
});

module.exports = db;
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require("path");
const userRouter = require('./routes/user.route');
const loanRouter = require('./routes/loan.route');
require('dotenv').config()
require('./database/connection');

const clientUrl = process.env.DEV_REACT_URL;
const app = express();

//Middleware
app.use(cookieParser());
app.use(cors({
    origin: clientUrl,
    credentials: true
    }));

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use(userRouter);
app.use(loanRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

const express = require("express");
const cookieParser = require("cookie-parser");



// Instance of server created
const app = express();



// Middlewares
app.use(express.json());
app.use(cookieParser());



/**
 * - Routes required
 */
const authRouter = require("./routes/auth.routes.js");
const accountRouter = require("./routes/account.routes.js");



/**
 * - Routes used
 */
app.use("/api/auth", authRouter);
app.use("/api/accounts", accountRouter);



module.exports = app;
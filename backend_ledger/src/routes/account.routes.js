const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const accountController = require("../controllers/account.controllers.js");


const router = express.Router();


/**
 * - POST /api/accounts/
 * - Create a new account
 * - Protected Route
 */
router.post("/", authMiddleware.authMiddleware, accountController.createAccountController);



/**
 * - GET /api/accounts/
 * - Get all accounts of logged-in user
 * - Protected Route
 */
router.get("/", authMiddleware.authMiddleware, accountController.getUserAccountsController);




module.exports = router;